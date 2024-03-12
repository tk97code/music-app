const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const logo = $('.logo')
const download = $('.download')
const plus = $('.plus')
const minus = $('.minus')
const btnPlayPause = $('.playPause')
const btnPlay = $('.play')
const h = ":sptth"
const l = "87ituP"
const listMusic = l + "/moc.koobecaf//" + h
const audio = $('.audio')
const reload = $('.reload')
const left = $('.left')
const right = $('.right')

const app = {
  songStart: 0,
  textData: {
    logo: "Fallin'-All-in-you",
    fb: "blank",
  },
  music: [
    {
      name: "Fallin'-All-in-you",
      singer: 'Shawn Mendes',
      img: 'https://knowinsiders.com/stores/news_dataimages/trangnth/112020/05/08/in_article/3825_shawn-mendes-fallin-all-in-you.jpg?rt=20201105083827',
      link: './access/music/fallingallinyou.mp3'
    },
    {
      name: "Ánh-sao-và-bầu-trời",
      singer: 'T.R.I x Cá',
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcUFBUXFxcaGxcYGxoXFxsaGxobGxcaGBoXGhccICwkGx0pIBgYJTglKS4wMzM1GiQ5PjkyPSwyMzABCwsLEA4QHRISHTIkISk0MjMyNTIyMjAwMjQ0NTA0MDAyNTAyMjs0MDQzMjA9MjAwMjIyMjIyMjIzOzIwMjAyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABJEAACAQIEAwUEBgYGCAcAAAABAgMAEQQSITEFQVEGEyJhcTKBkaEUI0JSsdEHYnKSwfAWM1OCssIVQ1Rzk6Kz8RckNYPS4eP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACcRAQEAAgICAQQBBQEAAAAAAAABAhEDIRIxQRNRgbFhBCNCcaEi/9oADAMBAAIRAxEAPwDn6KmxYs5AFhpbS2hF9qhrpjdyVLNXSXC4Z5HCILk/ADqTyFRyIVYqwsQbEdCK0MO8qQs0a5Ev4nGjNrYAHoPKs4661nHK3K+tNZYyYz7iiiitMiiii9AUCrcAiIUN3gYmxYWyrc2Gm50tfWk4jg2hfI1jzBF7EdazOSeXj8tXC+Pl8KtFAai9aZFFLn9fjRQJRS0UCUCii1ESTb/H8bfwqMG1SzagN6VFQooovQKKKKCaUUCUWoooCigCgmgLnrS0lFBoY/utBdiw0uB7yDfncn02qgw6XI9LfKgirGAw4dwDoouzHoq6t+XvrnjjOPHu703lfPL06HgiqYjA51ZS+Xojmw9/2v7wrmJ42RmRt1JB93OruG4gRiBKdAW1HRDpb3C3wq52pwuWRZBs4sf2h+Yt8K8+G+Pl1f8ALv8ALvnrPi3Pjr8MVbW2Pxpt6Ks4DBNM5RCAQC3iuBYEDkPOvZllMZu+nlxxuV1Faip3wrCQxgXYEjTbTc3Ow8zVzDcH7y4SaIv90E/jbX3Vi8mMm7WsePK3UjMBrpe1oFoj5v8A5a57EwNGxRxZhv8AmPKuh7W7R+r/AILXn5LLzcdn8u+E1xZy/wAOapatw4C9u8kSK+oDk3sdiQNh62p/EeFyQ2ZrMp2ZdvQ16PqY71vtw+nlry10oXopaStsiirWE4e8gLCyou7sbKPfzoaCMmwlT91wPjlrPnjvS/Ty1tVoqXE4dozlcW0uOYIOxBGhFJBA0hyopY9B/HoKvlNb30njd612RNVI9CPnTK2P9DmMXkljjJtYEknfoBVKbA2BZHSRV3yE3XlcqRe3nWMeXHL1W8uPKe4qUq250KpJsASToANT6VbmwHd27x1RjrkF2b3gaD41u54y6rMwt7inQKtw4ESaRyKzfdYFCf2b6H0vVWRCpKsCCNwdxSZy3ULjZNkJovRal0qoQGii1FqAoot/OtLQRXkG6K37Di/7rW/GtBZVjhALBXmOgY5T3aHWwPVh8FpuFw/eOqDS516Acz8L0cTkWRzoCgsqqRcZF0Gh+Pvrnl/6sx/NdMesbl+IjMByhtLEkA8iRa4+ddIi/SMHl3dBYftJt8V/GsibiV8OsKoiW0uqLZQNiq2sDqf5NTdk53SRo2YFXFxpY5l99jcX6bV5ufyuHlZqy7n+nfh8Zl473LNVj5fMfOtnssPrm/3bf4kqnxuFY52S4GbxqL8j0HkbirnZb+ub9hv8SV0585nwXKfMc+HG480xvxUfFvA0gv4pHcn9gMQB72BP90Vn4OXJIjg7MD7r6j4Xq1x5808nkQo9wF/nes9dx7q1x4/2pv5jPJl/c6+K3+1sYzxt1Vgf7pFv8VX+0CD6t21VA7kcifAFX3sR86pdrm1iHOz/AOWrXap7Rov3m+QBP42rxYbv0/y9uWp9T8OWdyxLE3JNyeprpMOe8wLA65Qw/cOZflYVzVh1rpOGAfQpf/d/wCvV/VTUxv2seX+n7uU+8rm6Db+RQAOp+H/3TlS5AB1JAG2599ep53TYCNZ8J3StZhv5ENmBI6GsHF8Nkj9tDb7w1X4jb31JxCPuZAiEhkVbsuhJIuTf3291XMH2hkXST6wegDfHY/CvHjjyYbyw7xver7eq5YZaxz6s638M3F4xpAi2sqDKo3PK5J5nSncOxzxMSmtxYqefTTqK1uOYSMxCeMAXtcDQENpe3I3qXGqMJCojA7x9C9tdrkg/IUnNhljMZPds1f8ApeLLHK5W+u9/rTIOFmc5mRySbksCL6jr6VZ4dw6UZ5Gsqqkl/ECTdCLWB8wdaznckZiSTrqTc3Pr763+Bqfosvn3n+AVrnyyww+PiemeLGZ5fP3Rdn4wkUmIYXKhgt+gFz8dqwZHZ2LHVmOvmTXRcJ8eDlQbgSaeq3FYWAxRjcOFDW5EX+B5HzqcNtyzy93evw1yyeOE9TSF1ZGINwyn3gg10HF0EuHjnt4wBm8xfKf+b8TWTxXGd7IWsANhYWJA2LHma2XOTAAHdgLf3nzD5a05bd4XWrv9pxSaznua/TmqKKBXreYEUUUUBRRRQbHCVTJLmkVHK5FzG297n8BVCXD5RfMja28LA/KozSWrEwsyuW/bpc5cZNeiVb4dpIr5lXKynxG1xfW3XS9VbUoQ5VexyvfKxBAaxscpO9joehrWWPlLGcbq7b/aFYcQi2kjLKftG2h8+oIFZvZwJDMxaSy5GXViyk5l1BOvI1QYW309a0sfw9EjjdTIjkLmjljZWY7GSNstnQn3jzrhjwTHC8e+nXLmtz89ds3imKHfSk6KXYq97oQTca/ZPrSRi5FtbkWtrfXQDrUGHxGcsMpsLa9b3/K/vrouy+BjhEmOcHJCbRpc5XnYeEZb28N8xt5HlXaTWOnK3d2udrJlREwtlMt+9mfQkOwOSMN0VTbTTbzqr2lxccgjyOGsWvY7XArn58RKzM7gSliWZh4WJJuTlJsefMelNTEKTbY9GBU/Bt6xeLG5TL7NzksxuP3SVvcOxUa4SRC4DESWUnU3UAVY4bw2N8GzzxtEqt4cSq5r5yFs6bsgNhmXa/rfmm0JAIIudbb+etXkwnJJL8XaYZ3C2z7aJp0+dF6S/p8KL11c2niXWfKzsI5QApzaK9tmB2U+tVlwLX1aNR1MqW+CsTVYtQTXOYXGal6bucyu7O2pxHHp3aQRklVtdiLZj5A62uSatT42PEwhHYJKmouDZiBbS3Xpves/huJw6ZjNA0p0ygSMije98oJPKuo4RjYFhkxRwcMaIQsVyzu8u6hWfku5NvwNcrwYyTW9y721ObLvfq9aZPE+FxYeKOOR8uINpJLm+RCDliCD2nO/lbexFPwHEo+4kQuqaMqKTrbJuepJufU1Hiu1E7+PLAGbUsIEJJ21Lg+VQf0nxX9oluncw2+Hd1rk4vOatMOW4elLhXEWhfMBdToy9R5edPxcEbEtC65TrkYhGU9PFYEehrRSfDYpSJCmGxGYkSKtoXFgArqP6vb2h1JO9qzZOFyrCMRYGIuUzKQdQbXI3AJBsT/EX39Ob3Or+2fqXWr3P0TDYVAbyyKqjcKwdm8gFvb1NO4rxIzEADLGvsr8rnzqvgsNJLIscalnY2A+fPQC3OopUKsyMLMpKkdCDYjTzFPCW+WXdnr+D6l1qdQ2iiitsCiiitAtRRRQTUGnA0hrKpMFh+8kjjvbO6JfpmYLf51vcQPdzPisQuSFHEOEgYEByhARgv2YwblifaNhz15yoOKSSSOrSM0lxkYuxLELcqAzdNaUdzwjFSSxTYlxhhIGVRI0aL3ZIzNO5tdiNAoG7H4JxZWmwcceHc9y7O+IxM8liMrW8VySpIXMFXX2PM1xGGlLKCdxdTy1G/5++qUviZ8zEX8CW0uMwVtd7g72tsKmhu4eGKRlw2EQtmcL3jizysdc2X/Vxrnay72FySduw45wyKKONJnaPDQghVS3eYiQ6vIAdFW5tc+ewINZ3Y0JhMMcfMCWbMkKX1ZmJLkf4b8grdatrwmWWQYziTrFECDkY+Ii91jVBey+XtHXTW9Bh9osBFGsDxI0ZkQu0bPnKrmsjZiAbsLm3K1VsBwITI0k7LFh1Ni7rmzN9xE+234VqcW4hg5ZmkYzzMxA3WGNV2AAsz2A9Oda/HzhomQuySxxIFw+GRswY2uZZWGwJ+NudyKbFPimHk+jyYtMS/dSRdwEnTKSMwC91GvgB0LBgORv1HHcPwGIlkWOICRm5HwEDmzMARlHPQV3fHU+miGV5o4sMsalmLC4kPtosYNywsBb8am4XiIzhJkwISM5lQySuFbIV8U7nkNwANt/IJRx/FsHEmITC4fvJZNEZgoKNId1TLqqjmW0030Jp/aDAxYd1gRy8yqO/IYFQzWYIq2uLA8+ore7PcQwuExEccbBwxKy4lxYeycqRg+wmbLdjv6a1nYvgMIdp8fMuZmZgkLhpXLG/tqbIPO/wptGJhMDJIruoskYzO7Gyr0BP3idAo1N6r1d4zxKSXKkeWKFPYhAzKP12a4Z3I3Yn3b3yu8ce0l/NCD8Q1j8L1RocMwLzypFGPE5AHQDcsfIC591anajHK7phof6mAd2gH23+0+m5J0/71Nw2ZcJg2xBOWbE5ooQ3hZUBs8gB1vfQH9k7GndkMIiF8ZP/VYexUfek+wo6kXB9StTZpfx3ZOOKOJppO6VUBlY+Is7a5Il3JA0J2286w+0XCkhaIws7pNGkiZ7Z/Ffw+EWJ2+NM4txaTFyNJIfJVHsopPsj5XPO1Lgu0OJjjEaS5VFwpyqWQE6hWIJA8hTsXuGdmwoSTGZ4kd0jjjAtJIzEAaH2FF9SdflfQ4pDhI45cHBN3LFx3hnDkNk1UK6AhRc31F60OKp/wCbXETEjCYZIzGxN++fKHXJc+NixFz+prXM8DZcVxBHmtZ5GkK8iRmdY9d7kAee1BPj8AeHxoyzkYqS+kZ8IhI3JKhgSQNdOfS9YeEwLyB2UeFFLO7aKo5At94nQDck10vFOH5pXxPEX7rObrBGweVlHsoANEAFhmJ67Vh8V4sZQI0QRQqbpEmwP33O7v8ArGkGbRSikrYKKKKAooooLFFFFZaMdwu5A/j6dagmzOpyqRzBbTUaghd9xztT/oiZixW5O9yT8tqcMMnJQPQW/CiMoE2GVZC2XK3jC63yrorbhr78s1MdCGCDvDa9s1zbMMlvatcByb+nWrDxIC9/D4tLnQ3CKWvf7Pi+NRwKrFWKAAsFAIGt1aQsfioqDXxfGndY0mUqsSCNALZco8hrmOlzbWwpzcRea2eSV7Dw953ht5DPtUSRKuygegAp7VQKPKm0NSUCj0FLbnYUnvFF6IS9IKWl91Ag/nSrXCsEZ5o4hu7Bb9Buze5QT7qq1b4ZjzA5dQCckiDWxUuhXMD1F6C12pxqTzEKAYkAijWwICJpcA9Tc/DpWReQRiKORljDFwm6ZyuXNl5adCNyeZpbU5Br66UDBKVHjHK91uV9drjXT401HDC6kEdQb1MefqB+P5VWfCo2pUX+8PC37w1oJSdvLbypKgCSLsQ4/W8J+IFj8BR9JA/rFKDqbFf3gdPfagnJvruaK6XhvA4WiikdpZHkUsEisFChiLlrMTa2uUG19bAg1icQ7Q4GItHHhHeRSVzvNdLqxBtluGBA3tbXnU8oaJgeHSzEiKNntvYaD1Y6Crj9msWupgf3ZW+Sk1yuI7T4l8oEjRopuFiYxqDa2ay6A2JGgA8q24/0jYsKoUL3gtmkdndXA6xHwqTvdLVLlV0ZPA6HK6sh6MCD8DTK7LsJ2ojxSPBiTH3ud3UNlyyLIxc5Q25Viwt0t52zO2mAjhxAEahFZFbKNgbsDYcthoKuOe7pLGBRRRW0WKKWi1ZbJRtS1HiXsjMdfCx11vptQZ8kLuFOYZszuo5faIvfcnMBflQ7AG6+yqo/pqij00VvnTwGRwieMqgGVjYDMfv2NvY2N/Koe5N5QwPijvtYbsWAtcWuQd/tVBrUWqLDsSik72sfUaH5g1LVRYwPEJIHMkTBWylblVbQ20swI5Ct3t5jpGxMkJP1cZVlUKosTGtzcC59o7nnXM1oPxucySS5xnkQxucq6oQARa1hoo1FQdwWywRtI6PAmEhaSDuwzkshVXDWuouBrfTKdt65HsoPFib/AOyYg/Jdapx8bnV0cOMyRiEeFSDGBYIy2sw9aP8ATc9gM4sImgAyrpG1rrt5DXfSmha7NcFTGM8ed0kAV1NroUzAPfS4ax01sal4Bg4XxuQBnjXOUWS2ZyikqrCw3Iva3KxrLwXFJYVZYnyBijEgDMShuvi3sDramyY+RpTNe0hbPmUBTm+8ANjVGhiePYrEK0UlnVioyiJboc4ACWAKm5C6nna+tanaDhKx4T6uR7QOFZGaJiWc6s3d6q97CzE6bVk4ntRinXKZALkElEVGYg3BZlFzqKjxvH55UZHZMrlWYLGi5mBvmJAuW8/KmkZNLQWozGglU3Fuf5VGVoJPX51KDm/n42NBDatnhXC4+7OJxT93h0Nt7GRr2yL6nT+bjGq+3EEfDjDTQrLGrF0OdkZGN9QV9W+JqXeuhe432mw8cb4WNYo1Uq6tCM6RyBlZvrMwEjWzAgLYliCd64WHhc0ixskRSMqAGYGzkDxS3b2ySd10Gg8z6zwzgWAwsMc0mGiDsAwBvK1yAQFMhN2tzFh+Nc/xOV5sQZDnVCoAUMMqhRYKBa/n7654tOQxHAHjUnRydOVx52vb51iFCpsd9R/A13XFFktpmya58lg1rddOe9raVw0rgNYacvTTW3xrSp+GzIksTSAsiSIzBfaKhhmCm/S+l7V6H2xx0c8kUkbAqY105jUsNrjZhsa8zTc+Xurr1gUYSCWEGRbFJmtlZZizOylTpaxABvqB51Z7SmXoqHvv1X/dorTK/RTpAL6U0LUl3NtWaLVXHKxUKpAzEA9dSL2916smq2JQsyqDlIBa/T7I+N2qiBJRGzKVvovsC/U3YE3HtHUn30TFsyOSLWYWXUWYoDduemu3Kn4ZshYEZQW0YeySABqdwbjn13NMmCn2LkE2a3sDNdSb9fFsOmvWoJsCdLHorfvKL/8AMG+NRzySgppHq2X2m18LHXw6bUYMnLETuUCn1yhv8rVLid4/2/8AI9USoWt4rA+RJHxIFPCk7UGpkcAWvWM7ZOlxkt7QMpFNqSRgdvWo7VvG7naUhootSGiA0opKKBKKWgUQqDenu/IUxWsaeUB1DAetFRikqSwHn+FIzeQHuojtsDxHvuHspCs8WVWzbhdkdfO2nuNYbGrvZjCvJhpxHYuXjDLcAlFDMLE6Aljz6Gm4nheIjUs2HkyqCSQY2sBucqsWPuFc5qWtKZF99qw+0MiRwFSoBY+EC2hzZs1h6anqa2E+s1ZfDyHXzNZXGuHd4FKjUDYDQ63+NaGL2W7PyY6cRocqgZpHtcIvLS4uxOgF+p5V6VjYMNgsG2DRs8jKAyqTbvAFzSlbkIxyg+vvox8B4Xhkhwsdg+sk+7F7AH0PTkBsK40sTqTrWZLkbWO4Hn8DRVfMep+NFPDL7r5T7M48fj3yv8F/Om/0hi+5J8F/OuZoBrW0dN/SGL7snwH51PDjc2aRVOU2Acg5QFFzcC5uCzdBpvXLRuVYNbr8wR/Gt+PELFhFvqWBFlIvdyT/ABpKNDCQBkBY58wuRplu2pGUaHU870uJhKo2U6ZTo2wtsVbcemvuqGDFJIoeMMHN9FtfQ28Y2tpufdUjo9iZFDmxsFOg0+61tfO591UQYF7xpoRYxML/AK9lP/MXq3i9O7PSRfmCo+ZFVINE62QH3RvmX5EVax3sj/eRf9VaCzSU6pHjsKlykulktQ0lLTwote49Na0yjtTbU+koGUU8CmkUEZkUaFl+IpRKv3l/eFYXaHChSsgABY2Ph3Nr3J51ig+Q+A/KpaO3Mi/eX94UCRToGB9CK4kW6fh+VaHBEBmW3IM3yty9RTyHUUVXxuLWJczX10AG5qgOPx/cf4L/APKrsa307ujm7wxk6XDFSfhvXRdiO0mfGLE0skneK6gMXKggZwddL2Uj315djcUZJC9za/hB5Cu0/RLwfvMS2Je/dwDToZGBA/dXMfetYyvQ6DGw93I6bZSRby5fEWPvFZ+OxkUKgyMByA3J8gNzVTtb24jkmc4dAyKFRXOgdgWJe2+UXFutuVcJiZ3kYvIxZjzPLyA5DypPSvQ8N+k/MVimw4eDKUc3vI+llbLoo2FxfzBG1R4HCfTI5JcFG7BHytDIyCQAqGUg3ysDqNSD4TvXnQNtq1uznaKbAymWHKQQA6N7LKDextqCNbEbXPpT16Rvd3if9hxf/Baiuo/8T2/2F/8Ai/8A50VPLI08ioooqgpLUtFBJFiHTRWYDoGYD10NTDiEn3n/AOI/51VooJ0xTDm21vbb8/IfCn/TXtbM/L7bHa3Im3KqtFBoLxmYfbv6qD87VKe0E50JX92sqii7aR43N95R6KKtxdojbxR3PVWsD7iNPjWFRTaOg/pEP7M/vD8qP6RD+zP7w/KuepSKuxZxOKDH6sMm97yFrn+FQd633m/eNNoqAZidyT6m9JSmigSlRiNiR5gkfhRRQK7E7kn1N6SkooFL2FehYrj8nCsMmBiRO9aMSTSE5irygkxhNgyrlFzfS2lZX6POBrPO2Il0w+GHeOxFwWXxKvmBYsR5DrXM4rEs7MzMWZmLs7e0xJuWYcienKs3tYgsKUrpSWpy61pANqbalWloL3+lpv7Q/KiqeUefyooIwb0GtzjvGTNIQojdAqRq7QxhmyoEaQHLdMzAsByuNql7I4WJ5GRz9d4BEpjz3YsQ7hLFWZQBbPZBmLG+W1Bz4PpWhDwpyxRiqShkXunNnYvbLlU+1uosLt4gbW1rqeKnDPi3cSYZViRhDESMhbNrJNIBldszPIUW5OVVsNRVPB4nDYWEyxvHNMyyDNLGjP3mcKmSJ7lEADuXYXPgGmqgOSdCpKnQgkEHQgg2IIOxrb4RweJvrZp4u6TIZFQSlyX0SIER2zsRY5SSAGPKs7ESNK4tGod22jz3kd2/XZrsT0tvXQ4WOISfR+8jy4UF7u+RJcUXRHkZrjNHGL2ANysWntmgyOIcMRHdO8tLcERdzMreOzKgzAm9mFs2u3Osoi2h0I0sdx5EV2PfRTjE4hFhjYSZIXaR4zFHqVlKZz4guVUCLfMSbeGuWxYjzWhzuNszCzOxO4QeyDcAC5PXU2AaXCeBrJ9ZLPEkKBXkIkzOqk2C5VBCux8IB1F720NO4twqKFCO9j74nvO7DS+CNhmSIZoxmkIIJzlSLKLXJrWweHhhOSZvqcKRJNYBjPi2BEcCrezhLEWvbwyE6NTTwaHFukolSNXiaWQGdXld87lh4rBGtkDOwVb3IWwtQcrh8HJIGZEYqilmbZVVdyWOg9L3JsBcmoa7zHcHXEfRYUlVYQjPdWLqzBSxjw0ZHeSOESxY2UtrZToc7jXZxIoVdFId2zXaQd1BGvhCtKTlkldrk5bjwnKLWoOUtRS5DYNY2JIBtoSACQDtcBl08x1pGS3/AHoC1FvOnIBrcn3UygU2rouHdiMfOqvHhyEYXVndEBB2Ni2ax9K5tq+jF4lgsRCkYxERSQIqqsqqx2slgwN9hl91ZyuvSx57wv8ARZILyY2ZI41BZliuzFRqbuQAugOwNUO1vBMAqN9CEiyxqsjK5ciSMglyoc5g8YszCw0J05123aDh0EOWOPvQWDO2aeZwE1AuHkI1N/gKy+zGLCYn6wIIZEeJcx1zMQbtfdWylfeOpqS/Jp5JUmGgaR0jjXM7sqKOrMbAfOtjtlwM4LFyQj+rP1kZ/UYmw9VIK/3fOuu/RL2aLSfTpB4FzLED9p9Vd/RdVB6k9K1b0jou0axcL4Q2HX2nQwrbd5HU55D7sze4CvEzXYfpN4/9KxZjRrxQXjW2zObd43nqAv8Ad864+pjFKppQ3Sm2pVrSDanMKQikHnRSUU7N5UtBc4bgu9crmCKqtJI5Fwka+02UasdQABuWA53rdHEhDhZDAncrNmhjFwZJFGk08rjfTwKq2UF2sCVvWDgsWYy/hV1dDG6tmsylle11IIIZFNweVNxmLaVsz2FlCKqjKqIvsoi8lFz6kkm5JNBWy0lq2OBcIM7ksG7tCA2W2Z2IJWJCdAxCkljoiqzHQawca7nvSIABGoVbqzMrMB4mQublb6Ane19L2AQcNxXdSCQDxKr5Df2XKFVfzyk39QKq20A5cqdV3h+F7zMzuUijUNIw1NibLGgOhkc6AHzJ0U0GeVq1w3Fd1IslrlMzJtYSZTkYg8lfK392oCd+nn+davDOzuImZLIyRtZjI4IRU3Mlza4ttbckAb0RjknmSdb6nc9fXzo03099bWO7PyRxmU31LMqEoWEQ2kez6FriwUNsxuBa+Zw+UxyRyhc/dukhXWxCOreI20BNhfzoN3hnCIY5FXEAPKB3siH+rw8aDOzTEavJawEYsAWAYknLWTxniT4mQyNou0aC+WJBosaKNFAUAaWva9S43iCFJI4RIBI2eR5SpkezF1j8OgQMcx3LMATawFZdA8uxAUsSq3sLkhc1s1hsCbC/WwplqKSgUDzpwTY8r2+Fr8/OmmhaB2T+dPzpoGtwSDyIsCDyIN96KKD3aZnxuBw+JRQzFLuOeq2ksPtWZdvW3ny2OjupIGa4t6KBew8ybVhdie3MmBIikHeYYkkqB44yxuWQ8xe5KnqbW5+g8UhjmjGMwrLJE+rFeRvq1uWvtA6g++2Z10rLn4E3FsJEGYLJBIsefm8LBM9/1gDp1KedX+33G14fhI8Lh/BI693GF3jjUWZxbnyB6knlXNSdsnwEiRxZZFzh5UI1y5cuVW5MRY+qjqayv0lTRzTxYuKUyJPHcKbXjyEKUty1Ykqdjm61NdjkHX0t5bCmA0XotWwClFAWloA003pSKUGwoG0U7NRQd/NwPDphpXjSOcqVSOQv4czIc8sr5+7RApDLHuPqyxu1q4aVMpIuGtzW9jbmLgEj3VsdpOId5IsaZO6hHdoI1CRlh7cioPvNex1OULcnWse1B14wU7rHgIgI4gB30x07yR0EkiKxtnCgBBGmrd2L6bMxPZaN1hXDe07MryNIHjQBigVmAs81wxKx+EAcx465WaRnsHZmCiyhmLZR0W+w8hTBobjQ66jQ6ix19NKDo8XwCGRpFwUjSmOSKO7FFRw6uGdWY3y5oxrse8AUHQm9i+Cx93JgonaaWBO9k7rKI2naRI2zM3thFZhfwhArXN2IHHxuVZXUlWUgqw0KkbEHkaZaglxUKxnKHV7e0U1QHorfbA+8NOlxqem4ZwpbdxIVRFUYnGuxICoPFBhbgEhiSCQATmfS5S1c9w2REkR5BmVLvlOzMilkQ+TOEB8iajlxkrhwzsRI/ev+tJr4z1Pib40HRY/s++JlSVHIjlj7x5pVSNEAz6IM2yxxghASVFgTYEhnHo7IFiKx4bu1uVAXvnFyI/AT9IYXuXBZQWN2OUE8/DiZEZWR2VkvkIY+G++Xpfn1vSYnESSMXkdpGO7OxY+lzy8qC1wHhBxMjKWEcaI8kjsQFRVGhJOmrFVHr5VZXsxM0irGVeMxrMZbOsaRtfxOSLg2FwtixBFhc2GWs7hGjDEI5VmUbMUvkJ62zNYba3qXD8TnjsI5pVADKoEjAKrbhRfw38qI2+KdmHzwQwpeVoy7jKUyIDlSWa7skZYKzHxX6qpNjn8Q4CYoll7zMHfJCuQh5lVbvKEvdIwSMt9WDA2ArT4GmJYwd5iGjRjaGPRnkBBVnEbDKIgue7uCoAbKDtVXtB2keZ2WFmWFboh/1kiAk55JPaYsSWI0Hi2oOepKWlVSdhQNopbUlApNei4NpMFwEyRK+fFO12W5EcbAqX09m6R2v1byrzmvTewPbyNI48FiUsukccg1WzNZUdemtswv59alHmjE73v60uld/wDpW4DFhpIZYY1jWQOrqgsuZcpBC7AkMb26etefUl2pVXroPjQy2P4Uu1NNUOAoVdabelFA92G1MNKRSWoEoosfKiguUyn0lA21BFOooGWotTrUhFA2kp5WkoGgUONdNadakNA0CpsGU72PvBePOmcdUzDONP1b1Fagig2+I48KZpO8WWafMmZL5IoToUXMB4mUKlgLKgIvdtMKlNDUEdqSnkUgNqBtKG0I62+X/ekNBohKPQ2PI9OhpaSg9vx0Y4vwhXUAy5Q6jmJo7q6+WazL6ODXjGJwrxu0cilHQ2ZTuDa9jXrnYUf6O4XJi8QSEcmZU6AqFRRf7TkKbfrL515Ji8c8kkkjnxu7OxHViSQD01tWcVVxReigVQGhaULehj0oDNRmoAotQF6KKKC3SUUVQUUUUBQNqWigmxWy/s/xqqaKKA5UUUUCCiiigQ02iigDTTRRQNNIaKKIKbJsfQ0UUHsv6Uv/AEyD/eQf9Jq8doorOKhudDbUUVQq7UgoooHc6RqKKoWiiisj/9k=',
      link: './access/music/anhsaovabautroi.mp3'
    },
    {
      name: "Có-lẽ-quá-khó-để-quên-1-người",
      singer: '1thinG ft Nam Lee n’ Dblue',
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTExETFBMWFhYWERAREBYRFhEREBAQFhYXFxYWFhYZHioiGRsnHhYWIzMjJystMDAwGCE2OzYvOiovMC0BCwsLDw4PFhAQFi8eFh4vLy8vLy8vLS8wLS0vLy8tMS8xLy0wLS8vLS8vLy0tLy0tLS0tLS8tLzItLzAvLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QAOhAAAgECAwYDBgUDAwUAAAAAAQIAAxEEEiEFMUFRYXETIoEGMpGhsfAjM0JSshRi4RXB8TRygpLR/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAxEQACAgEDAgMHAwQDAAAAAAAAAQIRAwQhMRJBUWFxEyKBkaHh8AUUsTLB0fEVQpL/2gAMAwEAAhEDEQA/APDntFueXzkPf6Qev0nA9AdeUEluv0kK9fpAIT0mjGm7A80pHU3uci3+YI9Jnt1jMxIUEny3A6Am9viSfUwBdYDeG3WAjrAJrJr0gt1ht1lANekgJ6Q26wWPOKBLnpJc9JLHn9JLdfpBDgbT/Nfuv8RMxmnaX5r91/iJmM0CQxYYBIITATADIIpMEA76nQdhLAZkw1YMoPoe80Azg0dbLFMa8rSWXkKGG8EN4BJJJIBYT0+knp9IbdZLGdTiT0+khtAbyMxJudee+CkBHKQ25QC8JvBAafYk0kvJm6QUlhAbQ36RswtuN76nTLbhpz3wQr0+zJYfZhv0kv8AdpQSw+zJb7vASPsSLl+xAOHtEfiP3H8RMrCato/mv3H8RM7TQFkkkgEMKC5kgvYwC56QlL0rTUig2v8AKLWEymaoXBVbG3P6zoo8415uw9S8SQTOjTMtEz0Wl05G0WCSAQiQpJJNIIsUXXHKTSSx5yazqcQG33eAW5/ONrJ6QBfWN6wHtBYcpaBDfnDrF0gNooD6xbmDTnGt1gAuZLmC3WSx+xKBr9IubpDrBc9JKBw9on8R+6/xEoaXbR/Mfuv8RM7TQBDJJAGlbRorQDUBbKAc1xe4uAOmvKB3kw50+90Qm50GgmTV7ANG+6NTVl1tNNCiTv0E0Kto6qCQuHea1Mxk/wCZpptObNF4MMUQzJoMEWSCWX26Q6fd5LmQkzqcwX6yesB7QacpogdZLmAkRbjnAGJMhPSDXnJrAJfpBcRtYL9IBNIAOshaC4gDW6wWPOCwN+mp+/WQAfZgHF2j+Y/p/ETM26aNoH8R/T+Imc7pQSCSGACAwyWgMuww0JjYVd81NTtlHJbGVYXeehmbNGpN0cbohbhLF495ijRRVG/tHoNFqcYMOYYNqxoiGPMFBeSC0MCizT7vD6wayEmdTkNbrM2LrlR13CWntMuKplj0H1mgZqYJNybyxtJYNAJlxFSTkGzCVb3B9O01XHP5zi4dirBviOhmjEbQ/avq1rS0Do+spquecz4fGgjzWB+F4tSoDuMUCwuZopuSJhvL8O5gGnNJcRQxhzdIBx8f+Y3p9BKH3S/H++/p9BExNUuSzbybmwCj0A0A6CUFUkEMAgEekvmXuIollB7MDIDrVSLTnYb3mP8AdNdRtJRhE0mFwbZfbUSz/wCmKwjMYKU3gowmClvkBspmNEpx5gpJJJJQWgwHvGiE9J2ORDeVs9hGMrdZGDLWqmZjSvxj4iqAbfE8opIF9bylJe0prNJUeVEypEZJZSex6SuSWjJsvGRpSGvIJkp0KFS+l5dczm0msZ0FgHLxx87en0EzndL8b77en0EpO6UoJBBJeAMJIJIBbTqndvnSRLC3ITm4Vbsvx+E6JMxI2gsYKhkbeBATczJRRvgp7zCxteBN8A1048RN0eZKC0kMkgLSBBl6xyYpPSdjkC0w7RxWXyjeRcnkJrrVQs6WEwtGjQGJrr4jNYoCA1g3ugA6XtrfhOeXKsaW1t7JLuejT6d5m1aUYq23wl+djxmaBjPcZ8NiUYVaS0WsCr3QWvyYW3cQZh9nti0wtWvXsyUy4Ub0YJve36geA/xM/u1GLc4tNdubvinwdv8Aj5TlFYsilGV78VXNrlHNx+xxRpZnrJ4pylaSHMch3kn58tDqZyDPZYHauFxDii2GChrimbINbc11U9p53bWzTQrNTFyNGQ8Sh3X66EekmnzSbcMqanz248q8PxjWabGorLgaeLjvafnfj5UuNu5zpfhKOd1QuqXNszmyL3M9R7H4RWpV89NSQRbOoJHlO685HsfTVsRTDAMMtS4YBgfIeBm5ajbKkv6F/a/yzENI707btZXx4bpdvXsLitlGmpYV8O4BA/DqAsb8h/mYlnq9usirWRcFa2grLTQKL21BtPLYaiXZUXezKo7k2nPTZZTg5T/txXka12CGPKoY+/bfm6/7ff1BNtBgRPSYpqGCVVFHxWy3diBoObMQbX1sByiVqFHEUWr0VyMubOoAF7C5BA0vbUGSOqTpuDUG6T/yuxuf6c1cVkTyxVuO/wAafDZ5DGHzt6fQTPfSez2ng0OBRgihj4fmygMfPrrvlePwK/6fTIRc9qV2AUMfPr5t8q1S225l0/f7cmXoWur3uIKfHj25+v0PO7L2ca7MA6oFGZ2c2CruvbjKtoUUSoy03FRRbKw/VoL/ADvPR+yWy0IqVqqqV0pp4gDLckEnXuo+M5XtHs/wa7qBZW/ES24K3D0Nx8JY5+rPKF7JeXO17+K+VDJpunSQy9O7e73ut624Sf123OTJNOzlvVogi4NamCDqCC4uDPZ43YaPi0ORVpU6IdwAFV2zPYG3a56DrLl1McUlGXhZNPop54OUHumlXr39EeMwHvE9DNnGdnZOJp18YctJBTCMqAIoDAfqItx+lpc+z2/q7+EfD8Rf0/h5bC/S05vUJPpmqdXz9PU2tE3FSxy6k5dOyf8A69P99zg85v2bs8OpqPVWkgYrckFi3ID1nUx+z1qYtaYAVfBWo+UAaAkG3U3AhxO1MPSZqa4cMqnK5AXfxAv73qZylqJTiliT6mr7bL47X4fc7w0cMUpSzyXQnSvq3fw3pd9/4PLNv5gbjz6wodTO57Q7ORFStS0R7Age6Li4I5DpODSnpx5Fkj1I8OfBLDNwnz/PmbaceIka8pzJJDJAotMR3tLDM2LOo7TsjkZ69cnSelwyrjMKtIMFqUguh4FRlBI5EceE8k5lWYg3BII3EGxHYzlmw+06adSTtM9Wn1PsepOPVGSpq6+T7M9Th/Z1aSvVxTgKLZRTZgB62FyeAAl2w8TTr0quGN1vnyBjmbI2o7kHhPI16rNbM7NbdnZmt2vGpYojQi4+BHrOb005xftJ3K7VcKuKR2jrceLJF4cSUEmnfMk/F1t5HuPZj2LdsQgL0xYgpq3mYbtAtxz7A8NZs2nsbD4yo7YbEUz4VFFqFkqKKurXqBtbJc2zZQqqAzNrqNj7Zd9nVlpg0aeWlhq1eoxrFCEzYipTAA8751QLcs3jAAqqacUe0WHSh4FNa9FL1BWp0fCFTGJ5RT8fEm5FhnuqoR52AABnSGFp9U2nLi+Njz5dTFx9nhi447uru3xbfp2+J0dhUkH9UtMkp4lqZe2YpqFLW0va26cfY2wquGxVAuUIYVguQsbWS+twJycZtyoymmi06SG3lpIA+m69Zr1WPdrdJ7DZXtDUobMqhqVIs2HQIjDEWfDvW8J61UiqLVXLkKVAOWkdbZROT0s3LJU6U+VXlX3O8dfjUMKlibljezuu9vau9V3oxe0tHF5K5z0/Ay3y2Pi5Ra+tt9+s8ls+vkqU3FjldCRcDiLgk6DuZ28N7TUmo1aVakVVmoslPDAL4qJnLU6mIqs1UKWNJtC35dgF3x9n+1Q8Si1bD4fLSWpToslEuaCEu6BaLVBTcK7XuwLkXu19Z0w4PZwcJNO/BV2r4+py1Ws9tlWSCarxfVvd7eHotj2W3tn4mkaTUXpMGGZ1bMLjo1vgwBU7wTYzE2z8tOstFLNUBJA0UMVCk9BpPMYr2lOdqiF6tZgA+JxeV3PRKAJpUxv97OdSQROvhfaRatTGNcYRKtN9KQqValR3ZEKkoFzZaTVQi+RAbHfdj5n+n0/dnUfT+d9/U98f1m4+/jbl68bU3HZ16cAw9Lx8GtNCMy5QQeBV+PcTr4JxhqAZkp1DSRHyuudWq3tTVVOmrlRcg2UMRYi48fisYNFop4SL7pBviH/uqVbAkn9oso4DibsZWC0aVMPmZycRiGDBiH8yUaZO+6Jma3A1yOE0tO1k6ur3U3Kq7s4y1sZYelw99xUG726V5ePPf58Hd2hTprSWnWqlS5LOw0apUzZ3bQHexvM3tJRFSilZdQut7e9TbS/xt85y8JtQU6VRTRWrUZ6bI9U51p5AwA8Miz6texOW4GYNa07OO2zS8ek/mxz5MPSCVPEFI2VQVyEXq1GctoVKLmsA+lsw0ri4y9p7yd+W/Pnuby/qKnGeP2KUGqXiq/p8qTutl68s8tggpq0tx/Fp23fuE9ji8UPG8BwCtSlbX9xLAg9x9Jftna+TDFa6pVeqwpLTDOWpLQfxWNfEqA1Uh6gUJSKIuVwCLETjYzbtNhRdaX4tOkEQMlMYWjUzFmqrTufGfUWNTQZRcORebz6ZZJJuVUvxnHS654IOMY3bT57d18ULsXYvg41aR8oZSUZw2qMLqbAEneNw6zpI9X/UP6WpVRKYfU2VwFCZrZhxJsBcjVhe0z4f20dWxFUUUWvUzMlZCxZHdHVr+N4hCXZGCIUF6ajdcTm/6qpw2arWTPVq1GqphqVCji6gQr4dMulMBFLXdmbN7tOykgzX7aM5dU31Oq4+vqT99LHFQxJwj1Xs7+HmvW722u76e1cTTo7QNmJpmgEVmFiVzkhivAafOYsf7NO1RmpsuVyWN73QtqbWGus89tDarOAoVaaAghUBLEjNYvVe9Rz5jvawubASintGoBbM1v7WZR8BMrSyhTxyqVU9tn8+DpLXQy9Uc0G43a3prbe2lTvntXyr0ntPXRKVPDKblMuY8gosL9Te889QEqNbMLWAl1KdMWJYodKd/wCTz6jO8+Rzarsl4JcI0qY8RI00cAyQSSFK1x3Nf/U/7GGrWRxbNY8M3l19ZhzSBp3OQlQSqaCJS4mzLFMEe1xoOGvHWLaUhpw1Xylbm2bNa5y5rWvbnbS8qcxaW+RhAL9lYPxq1GjeweoqMw/RTv53/wDFcx9J1faDE/hkEZXxFSliDTB/6fB0kKYSkQOJRy1v2rSPGcXC4l6TpUpsUdDmRltdT6xK9dnZndizMxZ2clmZjvJJ3mAZ5YhiNCkyC4TbhhMazXhd8yzSNJkgMAacu517IM7eCoMgpIhAxGIRmNRjYYXCENdr/pLKrszbxTGnvmcSdLF7WzLlWmELUqFGs4Ys1VKKIiqNB4aHw1YqL3IFzYASpUCvaeIV3GQEU0VaVAHQiit7Ej9zEs56uZikvBMgM5tRfMe5nSmDECzHrrNxMyKWMQRiZFE2ZLaazSglKCXpMM2i9Y14ixhMFGuJIJIKcwmSMUgyzucwxWkkvKmZYqGxhYSosDIj8IAxjPzlZjrulIVyERjA5ghUYUiyxDaGC0TXhBMecf8AM6GDUEaa9pko7SpTa+msubfKuJnLuzquEWCGBd0MhSXhiwwCEzDjD5vQTYDMmNGvpNRIzLGWLHUbpswaUEuSVJLFmGbResIiqYRMFGkkkgGEmAWimSdjmMRKqmkU1ZWzXlSJYJFOsWGUDsY6nSIFvC4sIBGhQXlMupnSGRCFYfDkJjgyblK7R0H2NDITDANdImw49TqZYJTROglgnOjquEWXkiAw3maBZFvBeQysBMy43h6y8tM+LOo7TSIzLLl4Sky4DdNMyaEjpEWOswaRasMVYZKKGSS8kgMIhaXPhmG4XEoM6nMqKRPDMvMEtkKhTj2htDkiwKDEqmOwtKWgCmWUjK5YiSsiCVkBlwWMEkNFIhlhSLkgFRe3GOuIMqqDUxBJQNi4kco4rDnMNoZKLZ0b3guZgzyxa55yUXqNhmXEnX0jLX6fCV1jrCDZXL+A9JSkuvKyFqx1MVIwMybLQZLxAwjBpGgNJBJFA1PTvbKCvM33n/tgqYcneM3fT5SzMN4784A//HKdzgYamFHbvK3oEcJ07332iNRB5jsf9pGi2cpot5sr4M9/rM5X74SFKyt4vgS4LDAEWkBHCxYbyFDaGLeC0oHvBJJICqrQJ1mcradTxcqi46TPUfNvks10mOxgJmg0xEalLZKKowW+4QKhvul1Grkvpv8AjBC/DYb4/STGUbazuYLAApcn3spBHbcPjMW0KeW/yuLTNm6OVTEpLax6rWMqJmkYLlqx1qCZrQgyUWzaIQ0yB+sIrGSi2bc0Ezf1J+zJFFs7aAb9eIhtxF/lGAF+FvleRteHw0E7HEUbr3+UPU2MhvbTWJYHiAfvfAIW5aQMg46yU2vfhw0F4c9jbW1tCd8gKHwy7xoemszVKJ1487cJvZraDcT84Kgtr8bHeJKFnOKxDOjUpqR7tusobC8jeKNWZLyXlj0SOEUrIBbw3gvDBRWMABuBzjsQOp48oguT9LcJg0h/D6j5y3C0gb34HdKL87x1axuNING8pDh8LTZwH0F9eF+kyjEt0MpruXFjbnpMpMraPaeIg4jp07CcH2iqAgEb762nPwFVgLZ27X0tNRN9+vfWOBycRoJ1K1JTMVSgZtOzm1RReS8PhmKZSAMlpAY15QLaGGSAehf3vhNNXcO0kk2YEG74yijvbvJJAHPvHssrq+8nrJJADiOHcRK0kkAaruHeAcYZIBUZTx9JJJllRS3GJJJIaK33macJuaSSYNIohkkgo3Fu0Q8O8EkhS1fe9ZukkmWVFFXfKau+SSVEJW4TG8kk6IwyuCSSUg0kkk2D/9k=',
      link: './access/music/colequakhodequen1nguoi.mp3'
    }
  ],
  // view: function () {
  //   const _this = this
  //   // -------text Logo--------
  //   const logoContent = `${_this.music[_this.songStart].name}`
  //   const UpperCase = logoContent.split(" ").map(item => item[0].toLocaleUpperCase() + item.slice(1))
  //   logo.textContent = UpperCase.join("")
  // },
  btnPlay: function () {
    const _this = this

    const logoContent = `${_this.music[_this.songStart].name}`
    const UpperCase = logoContent.split(" ").map(item => item[0].toLocaleUpperCase() + item.slice(1))
    logo.textContent = UpperCase.join("")
    logo.setAttribute('data-before', `${_this.music[_this.songStart].singer}`)
    
    btnPlayPause.style.display = "none"
    reload.onclick = () => {
      audio.load()
    }


    btnPlay.onclick = () => {
      btnPlayPause.style.display = "block"
      btnPlay.style.display = "none"
      audio.pause()
    }


    btnPlayPause.onclick = () => {
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
      audio.play()
    }

    right.onclick = function () {
      _this.nextSong()
      audio.play()
      _this.download()
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
    }
    left.onclick = function () {
      _this.backSong()
      audio.play()
      _this.download()
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
    }
  },
  download: function () {
    const _this = this
    download.onclick = () => {
      const link = _this.music[_this.songStart].link
      download.innerHTML += `<a href="${link}" style="display:none;" class="clickDownload"></a>`
      $('.clickDownload').click()
    }
  },
  plus: function () {
    const _this = this
    plus.onclick = () => {
      if (audio.volume == 1) {
        Toastify({
          text: "Can't increase volume!!!",
          close: true,
          duration: 3000
        }).showToast();
        return;
      }
      audio.volume += 0.1
    }
  },
  minus: function() {
    const _this = this
    minus.onclick = () => {
      if (audio.volume == 0.10000000000000014) {
        Toastify({
          text: "Can't decrease volume!!!",
          close: true,
          duration: 3000
        }).showToast();
        return;
      }
      audio.volume -= 0.1
    }
  },
  startMusic: function () {
    const _this = this
    $(".audio").setAttribute("src", `${_this.music[_this.songStart].link}`)
    const logoContent = `${_this.music[_this.songStart].name}`
    const UpperCase = logoContent.split(" ").map(item => item[0].toLocaleUpperCase() + item.slice(1))
    logo.textContent = UpperCase.join("")
    logo.setAttribute('data-before', `${_this.music[_this.songStart].singer}`)
  },
  nextSong: function () {
    const _this = this
    _this.songStart++
    if (_this.songStart >= _this.music.length) {
      _this.songStart = 0
      _this.startMusic()
    }

    audio.onended = function () {
      right.click()
    }
    _this.startMusic()
    _this.viewListSong()

  },
  backSong: function () {
    const _this = this
    _this.songStart--
    if (_this.songStart <= 0) {
      _this.songStart = _this.music.length - 1
      _this.startMusic()
    }
    _this.startMusic()
    _this.viewListSong()

  },
  // btnMenu: function () {
  //   const faXmark = $('.fa-xmark')
  //   const faBars = $('.lines')
  //   const menu = $('.menu')


  //   faBars.onclick = () => {
  //     menu.classList.remove("close")
  //   }
  //   faXmark.onclick = () => {
  //     menu.classList.add("close")
  //   }

  // },
  viewListSong: function () {
    const _this = this
    const listSong = $('.listSong__list')
    const songs = listMusic
    const joinSongs = songs.split("").reverse().join("")
    const html = _this.music.map((songs, index) => {
      return `
      <div class="listSong__list--Card ${index === _this.songStart ? 'active' : ''} " data-songs="${index}">
        <div class="Card--left">
          <img src="${songs.img}" alt="" class="avatar">
        </div>
        <div class="Card--content">
          <p class="name">${songs.name}</p>
          <p class="singer">${songs.singer}</p>
        </div>
        <div class="Card--right">
          <i class="fa-solid fa-play class="playPause"></i>
          <i class="fa-solid fa-pause" class="play"></i>
        </div>
      </div>
      `
    })
    listSong.innerHTML = html.join('')
    const listCard = document.querySelector('.listSong__list')
    listCard.onclick = function (e) {
      const songNode = e.target.closest('.listSong__list--Card:not(.active)')
      if (songNode) {
        const runing = _this.music[_this.songStart]
        //chuyển đổi qua Number nếu ko nó sẽ ko có active nhé . Xi đa vlin
        _this.songStart = Number(songNode.dataset.songs)
        _this.startMusic()
        _this.viewListSong()
        audio.play()
      }
    }
  },

  start: function () {
    const _this = this
    _this.songStar
    _this.startMusic()
    _this.download()
    _this.plus()
    _this.minus()
    // _this.view()
    // _this.btnMenu()
    _this.viewListSong()
    _this.btnPlay()
  }
}

app.start()