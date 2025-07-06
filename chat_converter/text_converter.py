# Description: This file is used to refine the data from the text files
import re
from classes import RefinedMessage, Chat


# This function is used to find the date format from list of dates --> returns date format
def datelist_to_dateformat(datelist):
    dates = datelist

    # check if date is separated by '-', '/' or ' '
    splitter = next((char for char in ['-', '/', ' '] if char in datelist[0]), None)
    year = datelist[0].split(splitter)[2]

    # check if date is in dd/mm/yy or mm/dd/yy format
    ddmmyy = any([int(i.split(splitter)[0]) > 12 for i in dates])
    mmddyy = any([int(i.split(splitter)[1]) > 12 for i in dates])
    if ddmmyy:
        if len(year) == 2:
            date_format = '%d/%m/%y'
        else:
            date_format = '%d/%m/%Y'
    elif mmddyy:
        if len(year) == 2:
            date_format = '%m/%d/%y'
        else:
            date_format = '%m/%d/%Y'
    else:
        date_format = None

    return date_format


# This function is used to clean unwanted unicodes from the text files
def clean(filename, overwrite=False):
    unwanted_unicodes = {'‎': '', ' ': ' ', '﻿': ''}
    # print(filename)
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.read()
        # replace unicode with their value in the dictionary
        for unicode, value in unwanted_unicodes.items():
            lines = lines.replace(unicode, value)
        cleaned = lines

    # overwrite the file if overwrite is True
    if overwrite:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(cleaned)

    return cleaned


def refine_text_file(filename):
    date_format = None
    matches = []

    # patterns for different formats
    main_pattern = r'(.*?), (.*?) - (.*?): ((.|\n(?!((.*?), (.*?) - (.*?))))*)'
    iphone_pattern = r'\[(.*?), (.*?)\] (.*?): ((.|\n(?!\[(.*?), ))*)'
    arabic_pattern = r'(.*?) à (.*?) - (.*?): ((.|\n(?!(.*?) à (.*?) - (.*?)))*)'
    portuguese_pattern = r'(.*?) (.*?) - (.*?): ((.|\n(?!(.*?) (.*?) - (.*?)))*)'

    pattern_list = [main_pattern, iphone_pattern, arabic_pattern, portuguese_pattern]

    # clean unwanted unicodes
    lines = clean(filename)

    # search for patterns and separate its parts
    if lines.startswith('['):
        matches = re.findall(iphone_pattern, lines)
    else:
        for pattern in pattern_list:
            matches = re.findall(pattern, lines)
            if len(matches) != 0:
                dates = [match[0] for match in matches]
                date_format = datelist_to_dateformat(dates)
                break

    message_list = [RefinedMessage(match[0], match[1], match[2], match[3], date_format) for match in matches]
    return Chat(message_list)


def get_text_participants(filename):

    matches = []

    # patterns for different formats
    main_pattern = r'(.*?), (.*?) - (.*?): ((.|\n(?!((.*?), (.*?) - (.*?))))*)'
    iphone_pattern = r'\[(.*?), (.*?)\] (.*?): ((.|\n(?!\[(.*?), ))*)'
    arabic_pattern = r'(.*?) à (.*?) - (.*?): ((.|\n(?!(.*?) à (.*?) - (.*?)))*)'
    portuguese_pattern = r'(.*?) (.*?) - (.*?): ((.|\n(?!(.*?) (.*?) - (.*?)))*)'

    pattern_list = [main_pattern, iphone_pattern, arabic_pattern, portuguese_pattern]

    # clean unwanted unicodes
    lines = clean(filename)

    # search for patterns and separate its parts
    if lines.startswith('['):
        matches = re.findall(iphone_pattern, lines)
    else:
        for pattern in pattern_list:
            matches = re.findall(pattern, lines)

    participants = list(set([match[2] for match in matches]))
    return participants

