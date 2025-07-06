import demoji


def remove_emoji(text):
    if text is None:
        return None

    return demoji.replace(text, '')


def emoji_to_filename(emoji):
    temp = '_'.join(['{:X}'.format(ord(char)).lower() for char in emoji])
    return f'emoji_u{temp}.png'

