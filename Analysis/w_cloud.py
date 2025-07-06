import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from PIL import Image
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator
from constants import FILE_DOWNLOAD_FOLDER


def multi_color_func(word=None, font_size=None,
                     position=None, orientation=None,
                     font_path=None, random_state=None):
    color_list = ["#13264D", "#F65272"]

    # return a random color in the list
    return np.random.choice(color_list)


def generate_word_cloud(data: dict):

    file_name = f'{FILE_DOWNLOAD_FOLDER}/core/wordcloud.png'

    wc = WordCloud(stopwords=STOPWORDS, font_path=r'static/fonts/Barlow_Condensed/BarlowCondensed-SemiBold.ttf',

                   background_color=None, mode='RGBA',
                   max_words=300, max_font_size=750,
                   random_state=15, width=3000,
                   height=1200, color_func=multi_color_func)
    wc.generate_from_frequencies(data)
    plt.imshow(wc, interpolation="bilinear")
    plt.axis('off')
    plt.savefig(file_name, dpi=600, bbox_inches='tight')
    return file_name


