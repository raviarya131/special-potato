from chat_converter import convert_file
from chat_converter import get_participants_pkl
import demoji
import bisect
import os
import pickle
import shutil
from datetime import timedelta, datetime
from emoji_functions import emoji_to_filename, remove_emoji
from Analysis.w_cloud import generate_word_cloud
from pdf_pack.convert_pdf import to_pdf
from constants import FILE_DOWNLOAD_FOLDER


def num_format(num):
    string = str(num)
    string = string[::-1]
    string = ','.join([string[i:i + 3] for i in range(0, len(string), 3)])
    string = string[::-1]
    return string


def analyse(message_list, person_1, person_2):
    print(person_1, person_2)
    first_day = message_list[0].date.get_datetime_object()
    last_day = message_list[-1].date.get_datetime_object()
    days_delta = (last_day - first_day).days

    # print(first_day, last_day, days)
    if days_delta < 120:
        if days_delta < 24:
            chunks = days_delta
        else:
            chunks = 24
    else:
        chunks = 60

    # chunks is number of bars and delta is the width of each bar (in days)
    delta = timedelta(days=days_delta // chunks)

    date_chunks = [first_day + delta * i for i in range(chunks + 1)]  # Create a list of date chunks
    # print(date_chunks[0], date_chunks[-1])
    temp = {i: 0 for i in date_chunks}
    temp_dict = {'all': temp.copy(), person_1: temp.copy(), person_2: temp.copy()}

    days_dict = {'Monday': 0, 'Tuesday': 0, 'Wednesday': 0, 'Thursday': 0, 'Friday': 0, 'Saturday': 0, 'Sunday': 0}
    months_dict = {'January': 0, 'February': 0, 'March': 0, 'April': 0, 'May': 0,
                   'June': 0, 'July': 0, 'August': 0, 'September': 0, 'October': 0,
                   'November': 0, 'December': 0}
    time_dict = {'12 AM': 0, '01 AM': 0, '02 AM': 0, '03 AM': 0, '04 AM': 0, '05 AM': 0, '06 AM': 0, '07 AM': 0, '08 AM': 0,
                 '09 AM': 0, '10 AM': 0, '11 AM': 0, '12 PM': 0, '01 PM': 0, '02 PM': 0, '03 PM': 0, '04 PM': 0, '05 PM': 0,
                 '06 PM': 0, '07 PM': 0, '08 PM': 0, '09 PM': 0, '10 PM': 0, '11 PM': 0}

    all_dict = {person_1: {}, person_2: {}, 'all': {}}  # Dictionary to store all the data

    all_dict[person_1]['emoji_dict'] = {}
    all_dict[person_2]['emoji_dict'] = {}
    all_dict['all']['emoji_dict'] = {}

    all_dict[person_1]['words_dict'] = {}
    all_dict[person_2]['words_dict'] = {}
    all_dict['all']['words_dict'] = {}

    all_dict[person_1]['days_dict'] = days_dict.copy()
    all_dict[person_2]['days_dict'] = days_dict.copy()
    all_dict['all']['days_dict'] = days_dict.copy()

    all_dict[person_1]['months_dict'] = months_dict.copy()
    all_dict[person_2]['months_dict'] = months_dict.copy()
    all_dict['all']['months_dict'] = months_dict.copy()

    all_dict[person_1]['time_dict'] = time_dict.copy()
    all_dict[person_2]['time_dict'] = time_dict.copy()
    all_dict['all']['time_dict'] = time_dict.copy()

    all_dict[person_1]['call_num'] = 0
    all_dict[person_2]['call_num'] = 0
    all_dict['all']['call_num'] = 0

    all_dict[person_1]['dates_dict'] = {}
    all_dict[person_2]['dates_dict'] = {}
    all_dict['all']['dates_dict'] = {}

    all_dict['all']['count'] = 0
    all_dict[person_1]['count'] = 0
    all_dict[person_2]['count'] = 0

    for i in message_list:
        emoji_value = demoji.findall(i.message)
        person = i.sender
        for emoji in emoji_value.keys():
            if emoji in all_dict[person]['emoji_dict']:
                all_dict[person]['emoji_dict'][emoji] += 1
            else:
                all_dict[person]['emoji_dict'][emoji] = 1

            if emoji in all_dict['all']['emoji_dict']:
                all_dict['all']['emoji_dict'][emoji] += 1
            else:
                all_dict['all']['emoji_dict'][emoji] = 1
        if i.delete or i.is_media() or i.call is not None:
            if i.call is not None:
                all_dict[person]['call_num'] += 1
                all_dict['all']['call_num'] += 1
            continue

        all_dict['all']['count'] += 1
        all_dict[person]['count'] += 1
        for word in i.message.split(' '):
            word = remove_emoji(word)
            # if '\n' in word: print(word)
            if len(word) > 2 and '\n' not in word:
                if word.capitalize() in all_dict[person]['words_dict']:
                    all_dict[person]['words_dict'][word.capitalize()] += 1
                else:
                    all_dict[person]['words_dict'][word.capitalize()] = 1

                if word.capitalize() in all_dict['all']['words_dict']:
                    all_dict['all']['words_dict'][word.capitalize()] += 1
                else:
                    all_dict['all']['words_dict'][word.capitalize()] = 1

        all_dict[person]['months_dict'][i.date.get_datetime_object().strftime('%B')] += 1
        all_dict['all']['months_dict'][i.date.get_datetime_object().strftime('%B')] += 1

        all_dict[person]['days_dict'][i.date.get_datetime_object().strftime('%A')] += 1
        all_dict['all']['days_dict'][i.date.get_datetime_object().strftime('%A')] += 1

        all_dict[person]['time_dict'][datetime(2012, 4, 4, i.time.hour, 0).strftime('%I %p')] += 1
        all_dict['all']['time_dict'][datetime(2012, 4, 4, i.time.hour, 0).strftime('%I %p')] += 1

        date = i.date.get_datetime_object().date().strftime('%d %b, %Y')
        if date in all_dict[person]['dates_dict']:
            all_dict[person]['dates_dict'][date] += 1
        else:
            all_dict[person]['dates_dict'][date] = 1

        if date in all_dict['all']['dates_dict']:
            all_dict['all']['dates_dict'][date] += 1
        else:
            all_dict['all']['dates_dict'][date] = 1

        if i.date.get_datetime_object() in temp_dict['all']:
            temp_dict['all'][i.date.get_datetime_object()] += 1
        else:
            j = bisect.bisect_left(date_chunks, i.date.get_datetime_object()) - 1
            temp_dict['all'][date_chunks[j]] += 1  # Increment the count of that chunk

        if i.date.get_datetime_object() in temp_dict[person]:
            temp_dict[person][i.date.get_datetime_object()] += 1
        else:
            j = bisect.bisect_left(date_chunks, i.date.get_datetime_object()) - 1
            temp_dict[person][date_chunks[j]] += 1

    all_dict[person_1]['emoji_dict'] = {k: v for k, v in sorted(all_dict[person_1]['emoji_dict'].items(), key=lambda item: item[1], reverse=True)}
    all_dict[person_2]['emoji_dict'] = {k: v for k, v in sorted(all_dict[person_2]['emoji_dict'].items(), key=lambda item: item[1], reverse=True)}
    all_dict['all']['emoji_dict'] = {k: v for k, v in sorted(all_dict['all']['emoji_dict'].items(), key=lambda item: item[1], reverse=True)}

    all_dict[person_1]['words_dict'] = {k: v for k, v in sorted(all_dict[person_1]['words_dict'].items(), key=lambda item: item[1], reverse=True)}
    all_dict[person_2]['words_dict'] = {k: v for k, v in sorted(all_dict[person_2]['words_dict'].items(), key=lambda item: item[1], reverse=True)}
    all_dict['all']['words_dict'] = {k: v for k, v in sorted(all_dict['all']['words_dict'].items(), key=lambda item: item[1], reverse=True)}

    all_dict[person_1]['months_dict'] = {k: v for k, v in sorted(all_dict[person_1]['months_dict'].items(), key=lambda item: item[1], reverse=True)}
    all_dict[person_2]['months_dict'] = {k: v for k, v in sorted(all_dict[person_2]['months_dict'].items(), key=lambda item: item[1], reverse=True)}
    all_dict['all']['months_dict'] = {k: v for k, v in sorted(all_dict['all']['months_dict'].items(), key=lambda item: item[1], reverse=True)}

    all_dict[person_1]['dates_dict'] = {k: v for k, v in sorted(all_dict[person_1]['dates_dict'].items(), key=lambda item: item[1], reverse=True)}
    all_dict[person_2]['dates_dict'] = {k: v for k, v in sorted(all_dict[person_2]['dates_dict'].items(), key=lambda item: item[1], reverse=True)}
    all_dict['all']['dates_dict'] = {k: v for k, v in sorted(all_dict['all']['dates_dict'].items(), key=lambda item: item[1], reverse=True)}

    return all_dict, temp_dict, days_delta+1


def analyse_chat(file_address):
    if os.path.exists(f'{file_address}.pkl'):
        pickle_file = f'{file_address}.pkl'
        chat_object = pickle.load(open(pickle_file, 'rb'))
        participants = get_participants_pkl(f'{file_address}.pkl')
        print('Using pickle file for Analysis')
    else:
        chat_object = convert_file(file_address)
        participants = chat_object.participants
    # chat_object = convert_file(file_address)

    print(participants)
    if chat_object.first_person is None:
        person_1 = participants[0]
    else:
        person_1 = chat_object.first_person
    temp_list = list(set(participants).difference({person_1}))
    person_2 = temp_list[0]
    del temp_list

    messages_person_1 = [i for i in chat_object.messages if i.sender == person_1]
    messages_person_2 = [i for i in chat_object.messages if i.sender == person_2]

    full_dict, temp_dict, days_delta = analyse(chat_object.messages, person_1, person_2)
    top_emoji_dict, top_words_dict, days, months, dates, time, call, count = full_dict['all']['emoji_dict'], \
        full_dict['all']['words_dict'], full_dict['all']['days_dict'], full_dict['all']['months_dict'], \
        full_dict['all']['dates_dict'], full_dict['all']['time_dict'], full_dict['all']['call_num'], \
        full_dict['all']['count']

    top_emoji_dict_1, top_words_dict_1, days_1, months_1, dates_1, time_1, call_1, count_1 = full_dict[person_1]['emoji_dict'], \
        full_dict[person_1]['words_dict'], full_dict[person_1]['days_dict'], full_dict[person_1]['months_dict'], \
        full_dict[person_1]['dates_dict'], full_dict[person_1]['time_dict'], full_dict[person_1]['call_num'], \
        full_dict[person_1]['count']

    top_emoji_dict_2, top_words_dict_2, days_2, months_2, dates_2, time_2, call_2, count_2 = full_dict[person_2]['emoji_dict'], \
        full_dict[person_2]['words_dict'], full_dict[person_2]['days_dict'], full_dict[person_2]['months_dict'], \
        full_dict[person_2]['dates_dict'], full_dict[person_2]['time_dict'], full_dict[person_2]['call_num'], \
        full_dict[person_2]['count']

    # print(sum(top_words_dict_1.values()), sum(top_words_dict_2.values()), count_1, count_2)
    # print(sum(top_words_dict_1.values()) / count_1)
    # print(sum(top_words_dict_2.values()) / count_2)
    #
    # print(top_emoji_dict_2)
    # print(top_emoji_dict_1)
    # print(top_emoji_dict)


    message_delta_dict, day_count = temp_dict['all'], days_delta
    average_word_in_message_1 = sum(top_words_dict_1.values()) / count_1
    average_word_in_message_2 = sum(top_words_dict_2.values()) / count_2
    average_message_per_day_1 = sum([i for i in dates_1.values()]) / day_count
    average_message_per_day_2 = sum([i for i in dates_2.values()]) / day_count
    message_delta_dict_1 = temp_dict[person_1]
    message_delta_dict_2 = temp_dict[person_2]

    js_template = 'Analysis/Template/chart_data.template'
    with open(js_template, 'r', encoding='utf-8') as f:
        template = f.read()

    template = template.replace('#first_person', remove_emoji(person_1).split()[0].capitalize())
    template = template.replace('#second_person', remove_emoji(person_2).split()[0].capitalize())
    template = template.replace('#message_percent_1', str(len(messages_person_1)))
    template = template.replace('#message_percent_2', str(len(messages_person_2)))
    template = template.replace('#average_word_1', str(average_word_in_message_1))
    template = template.replace('#average_word_2', str(average_word_in_message_2))
    template = template.replace('#messsage_per_day_1', str(average_message_per_day_1))
    template = template.replace('#messsage_per_day_2', str(average_message_per_day_2))
    template = template.replace('#date_list', str(list(f'  {i.strftime("%d-%m-%Y")}  ' for i in message_delta_dict.keys())))
    template = template.replace('#message_count_list_1', str(list(message_delta_dict_1.values())))
    template = template.replace('#message_count_list_2', str(list(message_delta_dict_2.values())))
    template = template.replace('#message_count_list', str(list(message_delta_dict.values())))
    template = template.replace('#time_count_1', f'[,,{str(list(time_1.values()))[1:-1]},,]')
    template = template.replace('#time_count_2', f'[,,{str(list(time_2.values()))[1:-1]},,]')
    template = template.replace('#day_count_list', str(list(days.values())))
    template = template.replace('#20words_1', str(list(top_words_dict_1.keys())[:20]))
    template = template.replace('#20words_count_1', str(list(top_words_dict_1.values())[:20]))
    template = template.replace('#20words_2', str(list(top_words_dict_2.keys())[:20]))
    template = template.replace('#20words_count_2', str(list(top_words_dict_2.values())[:20]))
    # template = template.replace('#7emoji_1', str(list(top_emoji_dict_1.keys())[:7]))
    template = template.replace('#7emoji_1', '["   ","","","","","",""]')
    if len(top_emoji_dict_1.values()) >= 7:
        template = template.replace('#7emoji_count_1', str(list(top_emoji_dict_1.values())[:7]))
    else:
        template = template.replace('#7emoji_count_1', str(list(top_emoji_dict_1.values())))
    # template = template.replace('#7emoji_2', str(list(top_emoji_dict_2.keys())[:7]))
    template = template.replace('#7emoji_2', '["    ","","","","","",""]')
    if len(top_emoji_dict_2.values()) >= 7:
        template = template.replace('#7emoji_count_2', str(list(top_emoji_dict_2.values())[:7]))
    else:
        template = template.replace('#7emoji_count_2', str(list(top_emoji_dict_2.values())))
    template = template.replace('#unique_word_1', str(len(top_words_dict_1)))
    template = template.replace('#unique_word_2', str(len(top_words_dict_2)))
    template = template.replace('#emoji_count_1', str(sum(top_emoji_dict_1.values())))
    template = template.replace('#emoji_count_2', str(sum(top_emoji_dict_2.values())))

    js_file = f'{FILE_DOWNLOAD_FOLDER}/core/script.js'
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(template)

    html_template = 'Analysis/Template/html.template'
    with open(html_template, 'r', encoding='utf-8') as f:
        template = f.read()

    template = template.replace('#first_person', remove_emoji(person_1.split()[0].capitalize()).upper())
    template = template.replace('#second_person', remove_emoji(person_2.split()[0].capitalize()).upper())
    template = template.replace('#msg_avg', num_format(str(int(len(chat_object.messages) / 2))))
    template = template.replace('#day_count', num_format(str(day_count)))
    template = template.replace('#msg_count', num_format(str(len(chat_object.messages))))
    template = template.replace('#word_count', num_format(str(sum(top_words_dict.values()))))
    template = template.replace('#emoji_count', num_format(str(sum(top_emoji_dict.values()))))
    template = template.replace('#call_count', str(call))
    template = template.replace('#busy_hour', str(max(time, key=time.get)))
    template = template.replace('#busy_h_msg', num_format(str(time[max(time, key=time.get)])))
    template = template.replace('#busy_day', str(max(dates, key=dates.get)))
    template = template.replace('#busy_d_msg', num_format(str(max(list(dates.values())))))
    template = template.replace('#avg_msg_day', str(int(len(chat_object.messages) / day_count)))
    for i in range(1, 8):
        try:
            template = template.replace(f'#emoji_a_{i}', emoji_to_filename(list(top_emoji_dict.keys())[i - 1]))
        except:
            pass
        try:
            template = template.replace(f'#emoji_f_{i}', emoji_to_filename(list(top_emoji_dict_1.keys())[i - 1]))
        except:
            pass
        try:
            template = template.replace(f'#emoji_s_{i}', emoji_to_filename(list(top_emoji_dict_2.keys())[i - 1]))
        except:
            pass

    html_file = f'{FILE_DOWNLOAD_FOLDER}/core/analysis.html'
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(template)

    print('Analysed Successfully')

    shutil.copyfile('Analysis/Template/style.css', f'{FILE_DOWNLOAD_FOLDER}/core/analysis.css')
    generate_word_cloud(top_words_dict)

    pdf_file = f'{FILE_DOWNLOAD_FOLDER}/core/analysis.pdf'
    to_pdf(html_file, pdf_file, refresh=True)

    return pdf_file

# a = datetime.now()
# analyse_chat(r'C:\Users\krrav\PycharmProjects\Chatbook_in\faltu\Whatsapp Sample Chats\w.txt')
# b = datetime.now()
# print(b - a)


