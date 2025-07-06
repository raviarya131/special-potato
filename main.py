from Analysis.analysis import analyse_chat
from chat_converter import convert_file

file = 'WhatsApp Chat with Nath.txt'

pdf = analyse_chat(file)

print('PDF generated successfully:', pdf)

# chat_object = convert_file(file)
# print(chat_object.messages)

