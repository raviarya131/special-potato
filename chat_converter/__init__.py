
from chat_converter.text_converter import refine_text_file, get_text_participants

import pickle


def convert_file(filename):
    if filename.endswith('.txt'):
        refined_message_object = refine_text_file(filename)
    else:
        print('Invalid file type')
        return None
    return refined_message_object


def get_participants(filename):
    if filename.endswith('.txt'):
        participants = get_text_participants(filename)
        print('Invalid file type')
        return None
    return participants


def get_participants_pkl(pkl_file_name):
    chat_object = pickle.load(open(pkl_file_name, 'rb'))
    participants = list(set([i.sender for i in chat_object.messages]))
    return participants


def put_pkl(chat_object, pkl_file_name):
    pickle.dump(chat_object, open(pkl_file_name, 'wb'))
