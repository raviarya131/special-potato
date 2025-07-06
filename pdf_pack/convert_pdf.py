import asyncio
from playwright.sync_api import sync_playwright
import os
import datetime
from base64 import b64decode
from time import sleep


def to_pdf(html_file: str, pdf_file: str, refresh: bool = False):

    start_time = datetime.datetime.now()
    with sync_playwright() as p:
        browser = None
        try:
            # Launch a Chromium browser instance
            browser = p.chromium.launch()
            page = browser.new_page()

            # Get the absolute path of the HTML file
            absolute_path = os.path.abspath(html_file)

            page.goto(f'file:///{absolute_path}')
            # print('HTML file opened in browser.')

            if refresh:
                page.reload()  # Playwright's equivalent of driver.refresh()
                sleep(2)  # Give some time for content to re-render if needed after refresh
                # print('Page refreshed.')

            pdf_bytes = page.pdf(
                print_background=True,
                margin={
                    "top": "0in",
                    "bottom": "0in",
                    "left": "0in",
                    "right": "0in"
                },
                height="11.69in",  # A4 height
                width="8.27in"  # A4 width
            )

            # Validate PDF signature (optional but good practice)
            if pdf_bytes[0:4] != b'%PDF':
                raise ValueError('Missing the PDF file signature')

            # Write the PDF contents to a local file
            with open(pdf_file, 'wb') as f:
                f.write(pdf_bytes)

            end_time = datetime.datetime.now()
            print(f'PDF file created.....{os.path.basename(pdf_file)}, took {end_time - start_time}')

        except Exception as e:
            print(f'Exception occurred in converting pdf: {e}')
        finally:
            if browser:
                browser.close()  # Ensure the browser is closed even if an error occurs


if __name__ == '__main__':
    # Example Usage:
    # Create a dummy HTML file for testing
    dummy_html_content = """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Test Page</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f0f0f0; }
            h1 { color: #333; }
            p { color: #666; }
            .box { width: 100px; height: 100px; background-color: blue; margin-top: 20px; }
        </style>
    </head>
    <body>
        <h1>Hello from Playwright!</h1>
        <p>This is a test paragraph to be converted to PDF.</p>
        <div class="box"></div>
        <p>This page will be converted to a PDF document with zero margins and A4 size.</p>
    </body>
    </html>
    """
    with open("test_input.html", "w") as f:
        f.write(dummy_html_content)

    # Test conversion
    to_pdf("test_input.html", "output_playwright.pdf", refresh=True)

    # Clean up dummy file
    if os.path.exists("test_input.html"):
        os.remove("test_input.html")
    print("Test finished.")

