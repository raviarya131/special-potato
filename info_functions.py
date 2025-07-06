
def seconds_to_time(seconds):
    minutes = seconds // 60
    seconds = seconds % 60

    # if second is less than 10 then add a 0 before it
    if seconds < 10:
        seconds = f'0{seconds}'
    return f'{minutes}:{seconds}'

