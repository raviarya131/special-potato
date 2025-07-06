# 📊 WhatsApp Chat Analyzer

A Python-based tool powered by **Playwright**, built to analyze your exported WhatsApp chats and generate rich visual insights — including user stats, activity patterns, emojis, word clouds, and more.

---

## 🚀 Features

- 📅 **Daily & Monthly Activity**: Track message count over time  
- 👥 **User Statistics**: See who texts the most (in group chats)  
- 🕐 **Active Hours**: Analyze which hours are the most chat-heavy  
- 🔤 **Most Used Words**: Word frequency cloud generation  
- 📈 **Message Timeline Charts**: Easily spot conversation peaks and lulls  
- 💬 **Emoji Analysis**: Understand emoji usage trends

---

## 🛠️ Technologies Used

- **Python**
- **Playwright** – for headless browser automation
- **Pandas** – for data processing
- **Chart.js** – for data visualization
- **Regex** – to parse and clean chat text

---

## 📂 Input Format

Export your WhatsApp chat as a `.txt` file and ensure:
- It follows the standard WhatsApp export format (with timestamps)
- Media is not required (skip "include media" when exporting)

---

## 🧪 How to Run

```bash
# 1. Clone the repository
git clone [https://github.com/yourusername/whatsapp-analyzer.git](https://github.com/raviarya131/special-potato)
cd whatsapp-analyzer

# 2. Install dependencies
pip install -r requirements.txt

# 3. Install Playwright's browser binaries
playwright install chromium

# 4. Update filename
# Open `main.py` and change the chat filename variable to your own .txt file

# 5. Run the analyzer
python main.py 
