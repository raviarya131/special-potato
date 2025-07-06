# Description: This file contains all the classes used in the project
import datetime
from info_functions import seconds_to_time


# Date Class --> takes date as input --> returns datetime object
class Date:
    def __init__(self, date, date_format):
        self.date = date
        self.date_format = date_format

    def __str__(self):
        return self.date

    def get_datetime_object(self):
        if self.date_format is not None:
            return datetime.datetime.strptime(self.date, self.date_format)
        else:
            try:
                return datetime.datetime.strptime(self.date, '%d/%m/%Y')
            except ValueError:
                return datetime.datetime.strptime(self.date, '%d/%m/%y')

    def get_date_in_words(self):
        date = self.get_datetime_object()
        return date.strftime("%d %B, %Y")

    def get_date_in_words_short(self):
        date = self.get_datetime_object()
        return date.strftime("%b %d, %Y")


# Media Class --> takes filename as input --> returns type of media and extension
class Media:
    def __init__(self, filename):
        if filename.startswith('AUD') and filename.endswith('.'):
            filename += 'mp3'
        self.filename = filename
        self.extension = filename.rsplit('.')[-1]
        self.caption = None
        # print(self.filename, self.extension, self.caption)

        extension_types = {
            'image': ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'svg', 'JPG', 'JPEG', 'PNG'],
            'contact': ['vcf', 'vcard'],
            'video': ['mp4', 'avi', 'mov', 'wmv', 'flv', '3gp', 'mkv'],
            'audio': ['mp3', 'wav', 'opus', 'm4a', 'aac', 'ogg', 'wma', 'amr'],
            'document': ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv']
        }

        self.type = next((ext_type for ext_type, extensions in extension_types.items() if self.extension in extensions),
                         'other')


# Time Class --> takes time as input --> returns time in 12-hour and 24-hour format
class Time:
    def __init__(self, time):
        time = time.upper()
        self.original = time

        # check if time is in 12-hour format
        if 'AM' in time or 'PM' in time:
            hour, minute = time.split(':')[0], time.split(':')[1][:2]
            hour = int(hour)
            minute = int(minute)

            # convert to 24-hour format
            if 'PM' in time:
                if hour < 12:
                    hour += 12
            elif hour == 12:
                hour = 0

        # check if time is in 24-hour format
        else:
            hour, minute = time.split(':')[0], time.split(':')[1]
            hour = int(hour)
            minute = int(minute)

        self.hour = hour
        self.minute = minute

        # include 0 before minute if minute is less than 10
        if self.minute < 10:
            self.minute = f'0{self.minute}'

    # returns time in 24-hour format
    def to_24(self):

        return f'{self.hour}:{self.minute}'

    # returns time in 12-hour format
    def to_12(self):
        meridian = 'AM' if self.hour < 12 else 'PM'
        hour = self.hour if self.hour <= 12 else self.hour - 12
        return f'{hour}:{self.minute} {meridian}'

    # requires date in dd/mm/yy format
    def to_datetime(self, date='01/01/01'):
        return datetime.datetime.strptime(f'{date} {self.to_24()}', '%d/%m/%y %H:%M')

    # returns time in 12-hour format
    def __str__(self):
        return self.to_12()

    # returns time in original format
    def original(self):
        return self.original


class RefinedMessage:
    def __init__(self, date, time, sender, message, date_format, reaction=None, call=None, reply=None):
        self.sender = sender
        self.time = Time(time)
        self.date_format = date_format
        self.date = Date(date, date_format)
        self.reaction = reaction
        self.call = call
        self.delete = False

        if message == '<Media omitted>':
            message = '<span class="deleted"><img class ="deleted-logo" src="icons/block_dark.png">Media omitted</span>'
            self.delete = True
        elif self.is_deleted(message):
            message = f'<span class="deleted"><img class ="deleted-logo" src="icons/block_dark.png">{message}</span>'
            self.delete = True
        else:
            message = message

        if message == 'Missed voice call' or message == 'Missed video call':
            self.call = {'duration': 0, 'text': message}

        self.message = message

        if self.call is not None:
            self.call['duration'] = seconds_to_time(self.call['duration'])
            if 'video' in self.call['text'].lower() and 'missed' in self.call['text'].lower():
                self.call['type'] = 'missed video'
            elif 'video' in self.call['text'].lower():
                self.call['type'] = 'video'
            elif 'missed' in self.call['text'].lower():
                self.call['type'] = 'missed'
            else:
                self.call['type'] = 'audio'

        self.reply = reply

        if '(file attached)' in self.message:
            if '\n' not in self.message:
                self.media = Media(self.message.split('(file attached)')[0].strip())
            else:
                temp = self.message.split(' (file attached)\n')
                if temp[0].startswith('DOC'):
                    self.media = Media(temp[1].strip())
                else:
                    self.media = Media(temp[0])
                    if len(temp) > 1:
                        self.media.caption = temp[1]

        elif '<attached:' in self.message:
            self.media = Media(self.message.split('<attached: ')[-1].split('>')[0])

        # return None if message is not media
        else:
            self.media = None

    def __str__(self):
        return f'{self.date}, {self.time} - {self.sender}: {self.message} {self.call if self.call is not None else ""}'\
               f'{self.reply if self.reply is not None else ""} {self.reaction if self.reaction is not None else ""}'

    def is_media(self):
        return self.media is not None

    @staticmethod
    def is_deleted(message):
        if 'You deleted this message' in message or 'This message was deleted' in message:
            return True
        return False

    def is_missed_call(self):
        if 'Missed video call' in self.message or 'Missed voice call' in self.message:
            return True
        return False


class Chat:
    def __init__(self, message_object_list):
        participants = set([message.sender for message in message_object_list[:100]])
        self.participants = list(participants)
        self.messages = message_object_list
        self.first_person = None

