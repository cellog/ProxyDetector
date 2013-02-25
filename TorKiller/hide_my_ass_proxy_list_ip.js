function checkProxies(ip) {
var a = [
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.231.165.246",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.133.213.26",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "195.3.254.159",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.60.45.242",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Cambodia",
        "anonimity": "Low",
        "ipaddress": "119.82.252.120",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "209.239.113.16",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "24.127.215.249",
        "port": "29492"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.43.188.243",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "46.166.195.39",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.145.41.234",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Australia",
        "anonimity": "High",
        "ipaddress": "210.9.41.116",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Ecuador",
        "anonimity": "Low",
        "ipaddress": "186.47.18.202",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "222.124.7.99",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.54",
        "port": "8000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "203.77.232.99",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "India",
        "anonimity": "Medium",
        "ipaddress": "210.212.83.242",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.22.71.213",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Ukraine",
        "anonimity": "Low",
        "ipaddress": "212.113.47.87",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "217.218.215.250",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.75.136.122",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "190.114.254.188",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "180.211.134.66",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "213.138.65.218",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Serbia",
        "anonimity": "High +KA",
        "ipaddress": "89.216.26.231",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "85.185.163.84",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "119.73.48.101",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.34.74.20",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.159.6.98",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.93.233.19",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.164.77",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "93.100.3.158",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.235.94.191",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.11.35.243",
        "port": "8090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.11.136.19",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.48.61.32",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.70.249.11",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.206.14.26",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.87.193.134",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.215.254.24",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "110.74.218.147",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "68.153.213.71",
        "port": "43413"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.249.221.244",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.255.185.144",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.120.103.119",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.136.131.225",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Slovakia",
        "anonimity": "High +KA",
        "ipaddress": "194.160.184.114",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.117.82.29",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High",
        "ipaddress": "221.176.14.72",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.191.33.201",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.153.122.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "141.170.239.132",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.143.123.204",
        "port": "6669"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.62",
        "port": "8000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.3.153.74",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Norway",
        "anonimity": "Low",
        "ipaddress": "200.149.39.194",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.141.101",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "119.73.66.140",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "117.211.92.35",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Ghana",
        "anonimity": "Low",
        "ipaddress": "197.251.194.176",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "37.157.192.115",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "219.92.4.186",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.209.4.224",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.1.230.142",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "113.28.244.195",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.166.194.136",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.75.107.211",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Ecuador",
        "anonimity": "High",
        "ipaddress": "200.31.24.20",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "75.127.139.74",
        "port": "1245"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.208.230.132",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.86.181.76",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.232.149.220",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.1.25.180",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "116.68.198.206",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "89.171.46.225",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.213.193.169",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.14.225.106",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "119.73.12.80",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.254.55.70",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.208.251.211",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "202.102.58.241",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Netherlands",
        "anonimity": "High +KA",
        "ipaddress": "213.211.132.82",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "98.245.60.46",
        "port": "35378"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.126.104.139",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.80.78.47",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.251.6.207",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "81.22.201.20",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "183.89.85.216",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.241.36.64",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "212.57.3.94",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.81.113.222",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.19.129.5",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.216.123.245",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.138.248.78",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.82.190.142",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.67.202",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.118.50.14",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "217.11.25.82",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.207.49.12",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.178.217.39",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.163.60.95",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.163.184.247",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.87.225.136",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.70.174.229",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.23.123.17",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.66.32",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.252.0.54",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.136.204.6",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.167.85.7",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "110.74.222.117",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.14.121.242",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.66.153",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "176.31.118.210",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.158.236.98",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.236.46.222",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.138.200.96",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.247.55.41",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "193.93.229.156",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "49.212.161.77",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "112.216.108.134",
        "port": "6515"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.52.112.254",
        "port": "6672"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Belarus",
        "anonimity": "High +KA",
        "ipaddress": "178.124.147.183",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.73.124.198",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "203.19.4.165",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.51.30.53",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "74.67.68.11",
        "port": "25354"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Germany",
        "anonimity": "High +KA",
        "ipaddress": "46.128.170.89",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "49.0.124.70",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "216.171.90.22",
        "port": "8082"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.111.187.196",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.164.170.195",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.127.113.208",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.244.70.192",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "83.111.172.202",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "109.207.61.186",
        "port": "8090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.60.248.220",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.179.63.235",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.79.174.213",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.190.118.206",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "14.139.82.109",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.163.130.178",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.166.203.32",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "91.227.181.106",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.190.239.112",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.130.169.24",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "109.224.62.195",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.68.151.120",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.219.90.6",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "84.254.220.69",
        "port": "54321"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.51.34.52",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.101.200.122",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.75.153.140",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.164.178.246",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.6.79.100",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.238.4.115",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.79.167",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "81.90.233.120",
        "port": "1080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.231.62.241",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Macedonia",
        "anonimity": "High +KA",
        "ipaddress": "62.162.6.11",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.239.10.225",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.66.254.180",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.73.12.23",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.143.85.92",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.241.3.211",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.58.41.137",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.65.171.122",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.122.156.60",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "200.5.113.202",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.242.39.153",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.163.124.156",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.52.126",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "204.12.193.50",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.57.225.55",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.22.205",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "200.114.103.33",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.237.50.134",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.233.195.238",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.33.181.53",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.247.173.228",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.145.254.73",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "202.147.161.6",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.121.125.146",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "109.87.232.243",
        "port": "54321"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "94.23.39.54",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "91.213.87.3",
        "port": "3129"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.70.216.190",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "124.81.225.2",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.1.88.238",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.171.226.130",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "171.38.64.67",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.226.190.59",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "93.31.71.187",
        "port": "26252"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Bulgaria",
        "anonimity": "Low",
        "ipaddress": "188.254.250.115",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.251.62.66",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.194.5.107",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.91.223.42",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.76.179.57",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.253.116.3",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.66.139.16",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.85.101.76",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Iran",
        "anonimity": "Low",
        "ipaddress": "78.38.30.146",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.116.103.210",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "United States",
        "anonimity": "High",
        "ipaddress": "173.192.79.55",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Viet Nam",
        "anonimity": "High +KA",
        "ipaddress": "124.158.2.58",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Macedonia",
        "anonimity": "Medium",
        "ipaddress": "95.128.184.83",
        "port": "9999"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "79.143.86.19",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.126.56.126",
        "port": "6672"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "111.68.121.51",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.170.22.20",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.20.232.233",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.22.138.172",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.78.90.163",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.54.193.202",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.31.157",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.136.170.230",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.206.75.3",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Iran",
        "anonimity": "Low",
        "ipaddress": "178.252.155.148",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "190.37.210.94",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.24.131.193",
        "port": "6671"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "94.245.155.17",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "222.124.22.168",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.146.237.79",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.39.213.128",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.34.133.76",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.29.191",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.224.55.102",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.25.139.135",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Albania",
        "anonimity": "High +KA",
        "ipaddress": "82.114.82.60",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.111.66.139",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.73.162.104",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.2.212.183",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Bulgaria",
        "anonimity": "High +KA",
        "ipaddress": "212.233.184.189",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.201.228.134",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Finland",
        "anonimity": "High +KA",
        "ipaddress": "91.157.171.199",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.177.74.248",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.73.103.42",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "183.129.249.82",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.11.90.139",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "222.83.14.142",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Chile",
        "anonimity": "Low",
        "ipaddress": "200.27.114.228",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.51.19.225",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.78.230.128",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.171.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.127.176.14",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.97.206.254",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "217.219.93.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brunei Darussalam",
        "anonimity": "High +KA",
        "ipaddress": "61.6.253.180",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.6.142",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.88.171",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "India",
        "anonimity": "Medium",
        "ipaddress": "180.87.27.150",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.148.85.6",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.237.48.139",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.188.31.1",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.243.99.176",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.166.149.119",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.237.13.103",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "165.24.5.219",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.150.20.22",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.62.80.191",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.61.28.21",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "49.0.124.122",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.76.158",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.229.217.242",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "59.148.224.190",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "94.41.108.214",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "103.4.167.72",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.172.145.203",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "119.73.3.57",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.20.122.70",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "178.210.47.239",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "190.42.128.178",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.238.242",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.62.237.171",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Cyprus",
        "anonimity": "High +KA",
        "ipaddress": "213.149.188.165",
        "port": "30631"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.56.211.84",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.246.7.201",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.170.218.229",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.138.249.60",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.158.92.59",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.2.71.192",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.209.56.166",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.123.192.71",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.207.195.174",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.65.165.33",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.180.8.77",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "112.78.154.250",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "157.100.117.222",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.121.135.178",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.92.141.155",
        "port": "8090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.95.105.134",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Thailand",
        "anonimity": "High",
        "ipaddress": "115.87.132.171",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "South Africa",
        "anonimity": "Low",
        "ipaddress": "216.236.184.133",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.185.252.222",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.72.224.65",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "220.135.129.22",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.83.117",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Slovakia",
        "anonimity": "High +KA",
        "ipaddress": "94.136.137.202",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "203.70.194.123",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.131.90",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "2.184.31.2",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.14.232.123",
        "port": "8089"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.66.22.53",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "103.4.146.142",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "219.76.104.17",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "109.205.116.36",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.155.165",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "210.186.137.129",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "203.83.172.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.71.217",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.77.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "186.160.17.44",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Puerto Rico",
        "anonimity": "High +KA",
        "ipaddress": "173.243.94.150",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.234.28.42",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "200.109.201.61",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Serbia",
        "anonimity": "High +KA",
        "ipaddress": "91.187.132.13",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High",
        "ipaddress": "218.92.252.39",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "152.66.244.117",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "178.208.255.123",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "162.105.17.121",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "49.128.176.199",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.150.65.137",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.106.16.116",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "118.123.13.165",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.202.64",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.153.117.37",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.163.165.155",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.249.149.155",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.89.144.253",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "178.18.17.208",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "175.136.234.10",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "74.112.203.107",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.36.4.228",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.140.54.121",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "77.223.243.122",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.114.205.124",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.191.27.118",
        "port": "8181"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.128.134.7",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.123.159.60",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.246.167.5",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.116.125.42",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "210.221.221.55",
        "port": "8081"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.232.77.4",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.9.254.128",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.219.25.229",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.132.28.104",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.121.130.244",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.9.248.127",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.254.132.146",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.189.153.115",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.160.107.244",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.244.194.235",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.43.188.6",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.148.117.31",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.228.68.72",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.252.25.194",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "119.15.88.114",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "125.162.71.19",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.4.52.205",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.43.8.2",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Slovenia",
        "anonimity": "High +KA",
        "ipaddress": "84.41.108.74",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "61.19.197.227",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.112.118.205",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.254.213.239",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.123.250.158",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.5.65.31",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "24.230.48.124",
        "port": "8123"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Costa Rica",
        "anonimity": "High +KA",
        "ipaddress": "190.211.97.110",
        "port": "8082"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "62.244.230.226",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "82.200.236.50",
        "port": "9090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.180.200.251",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "49.212.182.173",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.61.31.72",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.6.191.94",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.99.189.75",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Slovakia",
        "anonimity": "High +KA",
        "ipaddress": "94.136.157.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.206.12.130",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Finland",
        "anonimity": "High +KA",
        "ipaddress": "193.167.187.82",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.133.3.239",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.118.130.11",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.115.29.88",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "61.147.67.2",
        "port": "9124"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.12.38.214",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.100.75",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.113.90.179",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.214.55.124",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.165.116.206",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.11.199",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "200.114.103.213",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.70.236.250",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.248.67.146",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.243.5.41",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "211.206.122.150",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.138.86.182",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.52.150.225",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.55.145.93",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.208.216.132",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.243.252.201",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Viet Nam",
        "anonimity": "High +KA",
        "ipaddress": "118.70.13.30",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.47.16.6",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Paraguay",
        "anonimity": "Low",
        "ipaddress": "190.128.170.18",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.30",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.25.212.42",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.55.141.11",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.230",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Germany",
        "anonimity": "High +KA",
        "ipaddress": "88.198.115.7",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "186.4.110.36",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "89.251.103.130",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.15.53.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Georgia",
        "anonimity": "High +KA",
        "ipaddress": "213.131.41.98",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.93.232.57",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "200.37.145.130",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.55.219.112",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "217.219.123.59",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.12.81.30",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.83.201.232",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "59.60.7.146",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "46.191.192.94",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.102.204.143",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "103.247.102.206",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "82.207.104.214",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.89.3.160",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.52.5.178",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.215.231.211",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "92.96.203.65",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.215.176",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.149.9.188",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.15.227.182",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.5.103.161",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.60.60.110",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "133.242.146.153",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.190.25.194",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Spain",
        "anonimity": "High +KA",
        "ipaddress": "94.23.87.243",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "69.88.252.6",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "164.77.220.197",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.114.103.89",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.61.246.78",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "219.76.104.1",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "211.53.208.125",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "194.85.15.155",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "123.49.32.133",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.90.79.243",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.130.181.60",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "77.240.103.6",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "197.220.163.75",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.11.37.13",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Mongolia",
        "anonimity": "High +KA",
        "ipaddress": "103.10.22.229",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.248.35.201",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.204.116",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "116.213.49.163",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.208.194.225",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.210.74.77",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "202.162.78.71",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.181.59.113",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Germany",
        "anonimity": "Low",
        "ipaddress": "194.25.112.147",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Namibia",
        "anonimity": "High +KA",
        "ipaddress": "196.216.56.18",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.55.183.254",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.54.6.224",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.85.136.236",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "82.200.165.46",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "61.238.159.72",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "France",
        "anonimity": "Low",
        "ipaddress": "176.31.111.181",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.55.162.91",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.5.199.10",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "68.71.76.242",
        "port": "8082"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "109.237.84.222",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.213.19.135",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.242.170.98",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.23.136.170",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.8.152.242",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.182.52.250",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "37.59.236.42",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.42.212.234",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Nepal",
        "anonimity": "Low",
        "ipaddress": "202.166.205.91",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "202.191.121.202",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "121.166.100.143",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.36.104.46",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "94.244.179.51",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.120.63",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.95.108.30",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.38.195.149",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.167.37.158",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "173.72.110.132",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "United Kingdom",
        "anonimity": "High",
        "ipaddress": "94.142.67.41",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "31.211.6.83",
        "port": "54321"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.5.74.199",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.79.124",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.94.149.114",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.245.161.3",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "210.212.98.228",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "200.125.100.117",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Nepal",
        "anonimity": "High +KA",
        "ipaddress": "202.79.37.73",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.218",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Brunei Darussalam",
        "anonimity": "High +KA",
        "ipaddress": "61.6.251.217",
        "port": "8118"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "58.215.170.115",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "200.35.93.195",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "5.190.188.2",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.5.74.174",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.27.249",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "193.193.68.2",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.139.141.104",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.58.175.119",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.133.92.158",
        "port": "8082"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "27.50.132.145",
        "port": "88"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "71.234.158.24",
        "port": "17619"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.144.241.194",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "46.36.114.153",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.223.102.86",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.195.178.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.159.243",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Spain",
        "anonimity": "High +KA",
        "ipaddress": "37.72.0.152",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.44.12.32",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Puerto Rico",
        "anonimity": "High +KA",
        "ipaddress": "204.11.158.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.6.73.235",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "207.182.158.171",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "83.220.79.68",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.191.28.37",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.164.46.26",
        "port": "52013"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "42.121.81.212",
        "port": "9588"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "166.111.26.220",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Tanzania, United Republic of",
        "anonimity": "High +KA",
        "ipaddress": "41.93.45.5",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "193.17.175.76",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.153.78.162",
        "port": "128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.145.113.113",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.113.64.126",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.85.166.2",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "119.73.3.125",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.190.61.82",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "124.81.86.178",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.65.233.224",
        "port": "8088"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "95.172.51.185",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.54.30.44",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "61.111.8.117",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "190.42.117.69",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "46.21.241.57",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.232.147.99",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "114.35.167.38",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Croatia",
        "anonimity": "High +KA",
        "ipaddress": "78.134.255.43",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "184.72.228.43",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Ecuador",
        "anonimity": "Low",
        "ipaddress": "190.110.217.101",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.44.49",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.84.204.8",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Mexico",
        "anonimity": "Low",
        "ipaddress": "187.174.250.131",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Malaysia",
        "anonimity": "Low",
        "ipaddress": "122.129.120.8",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "210.57.214.98",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "133.242.139.165",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Honduras",
        "anonimity": "High +KA",
        "ipaddress": "190.6.193.219",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.108.232.85",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.74.104.32",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "117.103.173.143",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "188.134.23.240",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Slovakia",
        "anonimity": "High +KA",
        "ipaddress": "178.18.75.251",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.84.93.226",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.24.34.178",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "89.222.181.225",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "203.81.196.241",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.118.208.136",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "South Africa",
        "anonimity": "High +KA",
        "ipaddress": "196.44.216.130",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.195.175.140",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.67.13",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.76",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.108.77.153",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.215.102.196",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.42.140.185",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.15.103.50",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.248.130.170",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.220.208.165",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.60.96.7",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "101.255.12.38",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.193.29",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "2.51.252.26",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.138.183.197",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "201.219.118.54",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "49.212.167.222",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "82.200.254.250",
        "port": "9090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.242.30.56",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.253.138.72",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "195.138.81.100",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.25.36.246",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "85.185.83.205",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "196.1.178.254",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Armenia",
        "anonimity": "High +KA",
        "ipaddress": "212.34.238.98",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.243.220.100",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.114.218",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Palestinian Territory, Occupied",
        "anonimity": "High +KA",
        "ipaddress": "188.225.181.46",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Saudi Arabia",
        "anonimity": "High +KA",
        "ipaddress": "87.101.137.97",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "203.114.105.243",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "207.182.146.249",
        "port": "1080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.215.133.195",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.92.47.108",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "216.244.81.253",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "190.234.100.179",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.225.52.130",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Bulgaria",
        "anonimity": "High +KA",
        "ipaddress": "91.148.144.192",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.3.50.3",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "66.243.223.143",
        "port": "35514"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Slovenia",
        "anonimity": "Low",
        "ipaddress": "84.41.105.1",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "31.25.138.32",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.243.150.4",
        "port": "31035"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.2.80.126",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.91.104",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "79.175.156.178",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "175.111.90.34",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.84.38.40",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.88.111.228",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "109.74.134.246",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.7.132.247",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.181.34.47",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.95.126.144",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Turkey",
        "anonimity": "Low",
        "ipaddress": "78.188.47.21",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "203.128.80.46",
        "port": "8089"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.92.149.233",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.58.117.109",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "121.12.118.241",
        "port": "999"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.5.199.12",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "92.96.197.127",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.49.104.113",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.120.80.182",
        "port": "8909"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Brazil",
        "anonimity": "Medium",
        "ipaddress": "212.24.47.185",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "200.14.47.195",
        "port": "8089"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.66.107",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.137.252.188",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.12.99.158",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.141.98.244",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.135.94.73",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.247.187.180",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Italy",
        "anonimity": "Low",
        "ipaddress": "212.3.190.77",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "119.73.65.174",
        "port": "8118"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.233",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.219.108.80",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.170.244.242",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Serbia",
        "anonimity": "High +KA",
        "ipaddress": "178.217.14.33",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "78.186.239.153",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.221.145.192",
        "port": "6670"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.74.205.149",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "89.209.106.235",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.20.72.61",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.202.226",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "111.68.125.150",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.165.99.43",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Saudi Arabia",
        "anonimity": "High",
        "ipaddress": "212.76.92.2",
        "port": "3129"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.30.209",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "125.39.66.131",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.165.52.227",
        "port": "6672"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Ecuador",
        "anonimity": "Medium",
        "ipaddress": "186.5.116.114",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.138",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "175.208.221.114",
        "port": "42321"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "95.67.106.110",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.140.72.100",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.86.157.111",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.133.79.208",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "78.107.253.91",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Colombia",
        "anonimity": "High",
        "ipaddress": "200.75.51.151",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "27.207.207.45",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.215.35.93",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "117.211.123.61",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "190.238.212.218",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.244.210.210",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "17.169.236.228",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "24.158.199.54",
        "port": "8082"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Australia",
        "anonimity": "High +KA",
        "ipaddress": "58.172.33.73",
        "port": "49395"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.125.26",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.17.137.105",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "223.4.31.169",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.88.170.131",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.67.81.110",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.94.211.123",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.156.217.122",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.209.41.29",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.64.80.105",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.6.178.166",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "91.201.190.186",
        "port": "13579"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.233.194.18",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.242.136.69",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.85.88.24",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "91.233.172.67",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.52.201.99",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.68.139.179",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.24.138.15",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.118.4.88",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.29.79",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "141.170.235.94",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.76.20.29",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "164.77.196.78",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.222.113.131",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.6.163.144",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.243.252.61",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "71.187.199.96",
        "port": "44493"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "98.242.146.151",
        "port": "32216"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "219.94.249.247",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "89.22.236.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "222.124.35.116",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.7.115.87",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "116.58.25.10",
        "port": "8118"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "190.41.70.37",
        "port": "8001"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.62.255.191",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.70.25.51",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.182.190.146",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.242.77.174",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "37.131.217.11",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.238.201.38",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Algeria",
        "anonimity": "High",
        "ipaddress": "80.246.2.33",
        "port": "8082"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.228.8.114",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "115.249.63.245",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.241.109.24",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.24.202.96",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.49.246.81",
        "port": "6669"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.146",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.138.51.20",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.254.144.149",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.57.8.105",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.90.150.119",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Romania",
        "anonimity": "High +KA",
        "ipaddress": "80.86.106.110",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "80.75.5.145",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "173.236.88.181",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.70.8.162",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "14.134.247.53",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "95.9.64.17",
        "port": "1080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.236.217.101",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "203.223.37.98",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.254.76.243",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.80.50",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Spain",
        "anonimity": "High +KA",
        "ipaddress": "212.89.2.242",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "62.173.37.202",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.221.21.6",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.137.99.128",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.165.173.36",
        "port": "8003"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "212.33.204.33",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Mongolia",
        "anonimity": "High +KA",
        "ipaddress": "46.4.214.126",
        "port": "9050"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "118.244.190.4",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.241.221.20",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.227",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "New Zealand",
        "anonimity": "High +KA",
        "ipaddress": "119.224.80.99",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.207.144.232",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.68.93.242",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.80.160.190",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.75.115.147",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Spain",
        "anonimity": "Low",
        "ipaddress": "213.37.5.195",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.49.72.231",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.121.107.27",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.78.13",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "1.34.29.89",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.221.76.12",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.166.83.199",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "190.36.22.75",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "186.92.217.156",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "119.73.6.198",
        "port": "8118"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.5.122.231",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.242.140.197",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.79.126.70",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.146.127.123",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.200.120.195",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.115.136.62",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "206.130.99.82",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.118.74.194",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Australia",
        "anonimity": "High +KA",
        "ipaddress": "202.90.50.3",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.74.228.131",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "125.163.192.106",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "186.90.79.136",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "120.50.0.60",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "202.131.100.202",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "78.102.16.10",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.119.239.32",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.90.103.190",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Hungary",
        "anonimity": "Low",
        "ipaddress": "213.134.24.218",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Saudi Arabia",
        "anonimity": "High +KA",
        "ipaddress": "212.12.186.153",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "200.31.107.98",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.248.231.117",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "175.103.39.221",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Venezuela",
        "anonimity": "Medium",
        "ipaddress": "190.153.5.4",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.11.245.132",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.110.70.73",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.155.37.241",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.54.229.27",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.126.88.225",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "23.29.113.100",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.112.53.46",
        "port": "3344"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "94.203.161.55",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "95.82.119.53",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Georgia",
        "anonimity": "High +KA",
        "ipaddress": "92.241.90.3",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "115.160.146.221",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.135.242.168",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "186.92.79.133",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "210.195.150.43",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.164.204.233",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "103.28.122.66",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.44.248",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.235.21.10",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.59.232",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.178.45.190",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "173.65.254.183",
        "port": "50573"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.73.33.184",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.230.246.138",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Ireland",
        "anonimity": "High +KA",
        "ipaddress": "79.125.17.157",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Philippines",
        "anonimity": "High +KA",
        "ipaddress": "116.93.12.103",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.142",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.16.112.200",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.126",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.241.126.137",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "219.76.104.18",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.18.135.43",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Germany",
        "anonimity": "High +KA",
        "ipaddress": "85.214.116.58",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.73.70.40",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.89.156.108",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.48.255.77",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.85.125.44",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.76.157.98",
        "port": "8001"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "58.97.99.146",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.124.45.161",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.104.34.172",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.86",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.122.243.91",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.77.192.239",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "64.37.51.112",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.232.68.81",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.175.124.210",
        "port": "8000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "54.246.107.21",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.225.10.225",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "197.253.7.13",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.249.178.175",
        "port": "8081"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "162.105.249.46",
        "port": "1122"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "180.241.119.144",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.90.33.5",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "14.102.149.18",
        "port": "1128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "63.141.238.165",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "147.31.182.137",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.89.148.114",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.226.26.154",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "78.131.55.82",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "14.136.195.2",
        "port": "3228"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "203.172.194.51",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "92.99.188.173",
        "port": "8118"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Philippines",
        "anonimity": "Low",
        "ipaddress": "116.93.12.98",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.224",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "221.226.14.180",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.54.255.19",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "210.177.139.89",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.125.63.70",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.49.179.153",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.113.64.125",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.74.68.26",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "119.235.54.91",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "86.111.144.194",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "109.163.231.243",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "186.90.147.151",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.43.164.229",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.16.156.177",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Australia",
        "anonimity": "High +KA",
        "ipaddress": "203.45.185.254",
        "port": "37738"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.223.124.88",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.106.222.187",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.115.76.26",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "82.127.78.223",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.130",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.8.157.88",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "59.62.128.70",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.14.155.106",
        "port": "9999"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.17.150.2",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.255.57.110",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "114.111.46.100",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "United Kingdom",
        "anonimity": "High +KA",
        "ipaddress": "81.103.234.225",
        "port": "47482"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.251.224.46",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "United Kingdom",
        "anonimity": "High +KA",
        "ipaddress": "78.86.68.186",
        "port": "38647"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.22.138.170",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "188.127.230.44",
        "port": "3000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.153.138.181",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.3.51.157",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "110.74.196.62",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "77.65.22.245",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.195.112.89",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.63.101.251",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "77.92.131.66",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "196.205.194.10",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.40.53.90",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "209.239.112.104",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.188.146",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.80.82.147",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.211.194.211",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.180.210.57",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.24.118.197",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.139.207.196",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.87.128.249",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.86.94.156",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.123.94.31",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.240.210.85",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Germany",
        "anonimity": "Low",
        "ipaddress": "85.25.109.152",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "42.121.18.69",
        "port": "9088"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Chile",
        "anonimity": "High",
        "ipaddress": "201.187.107.27",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.21.227.33",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.101.93.123",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.36.87.26",
        "port": "83"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.108.242.107",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.185.188",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.67.53.93",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.70.207.100",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.207.130.235",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Hong Kong",
        "anonimity": "High",
        "ipaddress": "203.198.23.82",
        "port": "9090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.234.37.13",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.92.58",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.101.41.25",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.61.8.124",
        "port": "88"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "46.241.44.111",
        "port": "6720"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.48.134.102",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.249.164.120",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.207.1.251",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.139.206.123",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "58.124.79.29",
        "port": "42321"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Georgia",
        "anonimity": "High +KA",
        "ipaddress": "78.139.150.205",
        "port": "2505"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.139.32.88",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.32.163.173",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.56.57.155",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.21.228.17",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.143.189.39",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.88.100.17",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.67.241.132",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.152.59.154",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Serbia",
        "anonimity": "High +KA",
        "ipaddress": "82.114.92.33",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.81.211.221",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.203.8",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.212.95",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.52.146.24",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.247.2.122",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.85.133.162",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.80.110.39",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "69.115.161.186",
        "port": "8123"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High",
        "ipaddress": "222.185.143.254",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "58.147.172.244",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.48.134.100",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "175.136.192.5",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.194.46.151",
        "port": "1888"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "114.6.15.154",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "201.219.3.137",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Iran",
        "anonimity": "Low",
        "ipaddress": "91.98.154.78",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.186.191.69",
        "port": "808"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.135.226.186",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "117.20.56.243",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "92.99.138.109",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.0.9.202",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.52.2.210",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.171.33.195",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "219.76.64.25",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.255.63.12",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.195.73.119",
        "port": "1170"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "124.247.238.59",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Chile",
        "anonimity": "High",
        "ipaddress": "201.187.107.19",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Saudi Arabia",
        "anonimity": "High +KA",
        "ipaddress": "89.237.134.10",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.138.184.107",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.249.133.219",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Guatemala",
        "anonimity": "High +KA",
        "ipaddress": "190.109.206.36",
        "port": "8090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "183.89.60.3",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.143.199.120",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.241.173.56",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "164.77.196.75",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.79.6.182",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.198.48.6",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.0.104.183",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.54.18.54",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.136.59.30",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.239",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.207.56.221",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.125.238.226",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.125.35.194",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.66.0.83",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.201.228.130",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "175.136.246.105",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.255.136.164",
        "port": "12800"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.239.35.143",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "218.102.39.153",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "178.18.17.211",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.215.4.193",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.251.110.177",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.110.70.2",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.67.85.71",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "77.238.98.138",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.223.42.253",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.139.65.42",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "77.243.10.210",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "111.221.3.218",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "27.147.152.38",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Brunei Darussalam",
        "anonimity": "High +KA",
        "ipaddress": "119.160.139.131",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.189.66.41",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "82.141.165.166",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.147.113.78",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.111.202.76",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Azerbaijan",
        "anonimity": "High +KA",
        "ipaddress": "94.20.29.150",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "77.65.19.35",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "112.160.185.241",
        "port": "42321"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.85.1.77",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "United States",
        "anonimity": "High",
        "ipaddress": "74.52.186.124",
        "port": "6515"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.164.50.117",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.26.105",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.171.67.179",
        "port": "8001"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.143.141.196",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.122.133.211",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.241.69.34",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "217.219.78.3",
        "port": "8081"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.205.18.217",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "88.220.56.150",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "190.98.157.47",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.169.37.125",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.80.143.156",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "110.74.221.248",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Croatia",
        "anonimity": "High +KA",
        "ipaddress": "78.134.253.167",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.215.88.12",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.77.113.242",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "91.219.99.9",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.38.136.195",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.117.189.56",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "176.8.237.102",
        "port": "54321"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "Medium",
        "ipaddress": "189.11.214.91",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "201.240.197.163",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Switzerland",
        "anonimity": "High +KA",
        "ipaddress": "217.150.244.124",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.138.169.190",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.99.2",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.230.114.245",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.92.72.101",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.248.81.225",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.110.65.220",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.208.71.70",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.191.28.74",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.226.239.198",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.152.177.174",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.27.114.233",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.45.236.51",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "114.6.15.149",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.85.105.148",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.99.172.117",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.26.147.216",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.162.9.95",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.113.45.65",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.73.31.121",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.43.62.48",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.178.88.82",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "119.235.54.23",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.113.221.68",
        "port": "54321"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "201.240.115.225",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "114.6.15.148",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Sudan",
        "anonimity": "High +KA",
        "ipaddress": "41.67.16.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "190.152.22.43",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.22.71.214",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "199.119.76.111",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.116.160.89",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.63.140.249",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "176.110.169.10",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.137.26.110",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "78.133.155.54",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.3.170.124",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "123.200.11.15",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.29.142",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "109.227.127.21",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.78.74",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "213.221.55.78",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "49.81.48.116",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.92.155.220",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "195.20.138.54",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "123.125.74.212",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.3.32.244",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "2.51.221.158",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.139.197.156",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.191.203",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.153.121.224",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "217.24.189.245",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "139.210.12.131",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "203.84.153.106",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "203.130.240.36",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.170.114.203",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.119.105.117",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.18.103.6",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.142.228.10",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "213.160.143.150",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.115.19.99",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Saudi Arabia",
        "anonimity": "High +KA",
        "ipaddress": "212.26.44.98",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "119.82.253.5",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Netherlands Antilles",
        "anonimity": "High +KA",
        "ipaddress": "190.185.113.246",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.119.146.49",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.244.79.158",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.206.204.254",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.68.131",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.27.131.140",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "92.99.140.42",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.16.16.114",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "200.84.18.31",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "219.83.100.205",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.138.232.114",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.38.115.113",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.204.171.170",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "184.73.185.224",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.192.207.110",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.5.57.206",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "46.225.241.134",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "208.78.160.118",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.215.75.170",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.191.147.207",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.241.195.76",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "212.154.188.26",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.23.77.59",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "125.164.221.129",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "125.39.66.150",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.94.193.152",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.34.130.58",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.59.91.3",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Italy",
        "anonimity": "High +KA",
        "ipaddress": "84.33.192.39",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.189.26.146",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.65.121.34",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.66.155",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.9.233.3",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Bolivia",
        "anonimity": "High +KA",
        "ipaddress": "200.119.194.131",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.75.100.98",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "89.103.170.63",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.22.184.162",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.93.178.140",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.113.211.8",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.11.95.146",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.45.236.54",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.162.193.92",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.105.230.112",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.144.7.44",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "94.137.239.19",
        "port": "81"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.113.89.91",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "50.16.182.251",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.219.25.226",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "41.75.201.146",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.154.101.136",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.234.184",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "59.125.100.113",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.133.92.156",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.142.82.180",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "218.54.201.152",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.82.63.122",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "58.67.147.206",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.254.90.18",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.211.81.199",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.37.202.62",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.157.211.5",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.216.170",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.14.150.180",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "122.252.181.20",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "United Kingdom",
        "anonimity": "Low",
        "ipaddress": "194.164.246.108",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "123.54.18.140",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.214.218.148",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Paraguay",
        "anonimity": "Low",
        "ipaddress": "200.85.39.10",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.163.163.79",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.181.237.106",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.207.101.128",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.43.22.148",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.80.212.30",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "222.124.213.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "183.82.128.210",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "62.201.212.28",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.101.35.3",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Iran",
        "anonimity": "Low",
        "ipaddress": "188.158.226.140",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.49.149.127",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "103.28.141.71",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.8.201.159",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Iran",
        "anonimity": "Low",
        "ipaddress": "151.232.55.190",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "63.141.216.176",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.77.69.210",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Albania",
        "anonimity": "Low",
        "ipaddress": "46.252.38.126",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "212.75.139.118",
        "port": "8081"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.153.191.224",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "190.236.46.211",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "103.28.227.78",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.164.223.229",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.22.168.146",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "175.106.15.12",
        "port": "8181"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "109.207.110.179",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "67.231.230.1",
        "port": "3129"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Nigeria",
        "anonimity": "Low",
        "ipaddress": "41.73.2.35",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.137.47.23",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Netherlands",
        "anonimity": "High +KA",
        "ipaddress": "213.93.172.122",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.9.163",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "80.191.48.210",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.16.132.116",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "95.82.119.174",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.232.16.3",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "197.251.194.124",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "58.67.147.196",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.191.20.31",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "114.6.15.153",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.45.58.226",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.152.22.205",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.163.57.34",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "59.172.208.190",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.192.17.138",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.238.139.99",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "210.57.215.130",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Ecuador",
        "anonimity": "Low",
        "ipaddress": "190.111.77.40",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.244.128.229",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.191.198.74",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.45.236.52",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.208.242.218",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.111.255.130",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.184.36.51",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Ecuador",
        "anonimity": "Low",
        "ipaddress": "201.218.59.122",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "195.246.54.170",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "186.38.45.3",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.73.96.21",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "109.198.126.112",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "80.249.166.64",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.5.228.123",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.199.196.65",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.249.107.196",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.79.193",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "24.130.223.89",
        "port": "53032"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.63.6.43",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.222.97.174",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.235.193.186",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.235.12.118",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "United States",
        "anonimity": "High",
        "ipaddress": "108.166.107.178",
        "port": "443"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.43.20.218",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "114.4.44.250",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "87.103.197.93",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "202.69.8.83",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "123.242.146.130",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "110.74.220.50",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "186.153.120.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.65.170",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "46.250.108.84",
        "port": "13579"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.80.192.213",
        "port": "1724"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.139.13.121",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "122.200.146.215",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.136.114.14",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "49.113.243.194",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "97.83.60.157",
        "port": "9055"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "202.143.133.227",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "202.129.59.70",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.205.80.38",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.242.50.50",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.145.180.231",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Bolivia",
        "anonimity": "Low",
        "ipaddress": "200.71.86.50",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "75.127.4.192",
        "port": "443"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.252.167.229",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.205.120.149",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.118.236.130",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "KENYA",
        "anonimity": "Low",
        "ipaddress": "41.198.70.66",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "91.203.60.241",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.88.10.172",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Turkey",
        "anonimity": "Low",
        "ipaddress": "88.249.244.111",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.74.176",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Serbia",
        "anonimity": "High +KA",
        "ipaddress": "84.22.58.198",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "117.102.163.46",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.37.123",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Zimbabwe",
        "anonimity": "High +KA",
        "ipaddress": "41.78.77.122",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Belgium",
        "anonimity": "High +KA",
        "ipaddress": "81.82.240.204",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.249.7.76",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.81.43.210",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.38.220.108",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Uruguay",
        "anonimity": "Low",
        "ipaddress": "200.108.196.94",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "223.4.31.172",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.235.16.41",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.32.32.26",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Malaysia",
        "anonimity": "Low",
        "ipaddress": "60.52.157.178",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.19.29",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "South Africa",
        "anonimity": "High +KA",
        "ipaddress": "41.164.142.154",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "119.235.54.209",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.18.198.136",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.80.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "202.28.110.17",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Denmark",
        "anonimity": "High +KA",
        "ipaddress": "93.166.121.107",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.220.72.176",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.138.206.11",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.198.163.41",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.229.1.171",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "98.221.160.203",
        "port": "49445"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.39.141.150",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "91.206.148.29",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "United Kingdom",
        "anonimity": "High +KA",
        "ipaddress": "92.239.221.9",
        "port": "27576"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.32.43.243",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Ukraine",
        "anonimity": "Low",
        "ipaddress": "217.27.150.230",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.166.154.196",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.112.1.132",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.198.185.173",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "77.237.162.57",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.164.137.205",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "200.84.85.121",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.115.169.190",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.97.146.148",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "117.102.94.36",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "103.247.16.225",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "114.32.95.96",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.198.40.124",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.72.61.122",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.149.225.17",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "223.25.195.68",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.103.139.64",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.208.251.210",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "77.223.208.230",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.7.114.36",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "200.109.14.21",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Netherlands",
        "anonimity": "High +KA",
        "ipaddress": "93.174.90.235",
        "port": "1080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.119.156.197",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "122.116.243.223",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Georgia",
        "anonimity": "High +KA",
        "ipaddress": "176.73.28.200",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "80.13.0.162",
        "port": "19831"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.91.172.91",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Ghana",
        "anonimity": "Low",
        "ipaddress": "197.251.132.129",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Slovakia",
        "anonimity": "High +KA",
        "ipaddress": "176.101.177.98",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "101.255.33.250",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "211.156.184.11",
        "port": "7071"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.43.240.130",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "178.233.149.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "183.178.56.14",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.190.136.90",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "203.189.89.153",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "118.103.149.164",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Romania",
        "anonimity": "High +KA",
        "ipaddress": "193.231.35.174",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "200.37.145.132",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "217.12.74.99",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "27.124.90.166",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.234",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "120.89.95.210",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "62.77.130.35",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "89.111.68.250",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "78.159.235.3",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Moldova, Republic of",
        "anonimity": "Low",
        "ipaddress": "92.39.54.161",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.216.87",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.145.2.18",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.86.162.189",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "61.152.108.187",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Moldova, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "92.115.165.10",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.155.20.205",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "103.4.146.138",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.15.84.111",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.66.151",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.241.100.54",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "119.235.55.19",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.187.148.34",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.232.94.150",
        "port": "8087"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.15.232.186",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "183.89.9.142",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Australia",
        "anonimity": "High +KA",
        "ipaddress": "1.179.147.2",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.76.130",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.205.106.223",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "188.128.94.54",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.249.192.74",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.95.229.19",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.242.155.130",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.81.112.147",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.4.250.105",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.23.239.223",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.95.224.222",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Spain",
        "anonimity": "Low",
        "ipaddress": "84.232.51.132",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "49.241.155.64",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "186.57.36.180",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.165.228.18",
        "port": "1080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.247.136.232",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Spain",
        "anonimity": "High +KA",
        "ipaddress": "87.98.226.33",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.125.35.196",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.178.74",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.76.124",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "197.251.136.57",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.204.26",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "178.252.126.108",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Moldova, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "217.12.115.90",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "203.176.183.198",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "85.192.166.187",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "146.185.26.198",
        "port": "8020"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.128.6.19",
        "port": "9000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "202.173.211.250",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.113.158.3",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "203.185.27.110",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "109.227.125.208",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.124.134.21",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.194.110.249",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Slovakia",
        "anonimity": "High +KA",
        "ipaddress": "62.168.66.60",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "137.88.169.25",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "173.213.96.229",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.206.15",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Jamaica",
        "anonimity": "High",
        "ipaddress": "208.163.36.221",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.199.198.181",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.182.190.156",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.44.6.10",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.160.194.8",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.36.48.241",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "91.98.251.34",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "201.218.130.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "188.168.82.131",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.121.17",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "92.96.248.95",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Latvia",
        "anonimity": "High +KA",
        "ipaddress": "80.232.249.142",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.45.116.138",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "137.189.43.90",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "67.44.134.82",
        "port": "87"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "186.190.128.215",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.152.22.202",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.252.172.131",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "United Kingdom",
        "anonimity": "Low",
        "ipaddress": "80.88.201.121",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.92.149.156",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.234.42.86",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "217.218.43.130",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Bulgaria",
        "anonimity": "High +KA",
        "ipaddress": "178.169.139.83",
        "port": "8081"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Chile",
        "anonimity": "Low",
        "ipaddress": "190.82.89.156",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.205.107.94",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.121.194.164",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Ireland",
        "anonimity": "High +KA",
        "ipaddress": "84.203.209.242",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "122.165.225.12",
        "port": "808"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "103.247.16.241",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.139.206.93",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.19.35.46",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "128.72.75.201",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "111.125.227.243",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.95.15.234",
        "port": "6671"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "South Africa",
        "anonimity": "Low",
        "ipaddress": "41.206.222.118",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.164.92",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "69.121.10.182",
        "port": "8123"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "168.8.76.247",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.106.16.68",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Slovakia",
        "anonimity": "High +KA",
        "ipaddress": "92.240.236.4",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.117.69.105",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Germany",
        "anonimity": "High +KA",
        "ipaddress": "77.20.196.232",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.146.125",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.191.27.143",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "106.3.98.79",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.23.205.91",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Canada",
        "anonimity": "Low",
        "ipaddress": "209.172.34.101",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "212.175.88.3",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "125.141.206.37",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.3.18.91",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "South Africa",
        "anonimity": "High +KA",
        "ipaddress": "41.193.75.52",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Taiwan",
        "anonimity": "High",
        "ipaddress": "61.221.96.141",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "183.110.231.240",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.209.38.110",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "80.191.169.66",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "118.244.190.34",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "84.241.52.97",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.49.0.208",
        "port": "8082"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.170",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "192.41.170.23",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.83.14.143",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "190.42.186.152",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Slovakia",
        "anonimity": "Low",
        "ipaddress": "87.244.206.170",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.67.168.23",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Zimbabwe",
        "anonimity": "High +KA",
        "ipaddress": "41.78.77.123",
        "port": "3131"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.244.191.42",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "201.234.24.212",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "36.249.68.234",
        "port": "6671"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.209.0.98",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.50.12.154",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "119.110.71.109",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "180.87.197.91",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "176.197.98.42",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.139.56.143",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Romania",
        "anonimity": "High +KA",
        "ipaddress": "95.77.97.146",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.55.80.118",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "2.181.129.38",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.249.191.189",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.13.197",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "82.193.115.192",
        "port": "8090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.204.191.241",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.85.89.167",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "61.57.118.175",
        "port": "8088"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.60.243.81",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.181.96.69",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.19.146.34",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.115.47.123",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.122.83.29",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.250.87.121",
        "port": "81"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.20.45.231",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "197.251.195.69",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "222.124.8.9",
        "port": "8000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.113.221.70",
        "port": "54321"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.112.161.201",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Netherlands",
        "anonimity": "High +KA",
        "ipaddress": "217.19.16.184",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "121.100.25.40",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.85.9.66",
        "port": "6588"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "India",
        "anonimity": "Medium",
        "ipaddress": "111.125.137.146",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Viet Nam",
        "anonimity": "High",
        "ipaddress": "117.3.66.115",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "91.98.24.84",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.68.39.53",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.192.64.15",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "220.248.237.234",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.117.157.196",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.62.172.150",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.201.228.132",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "195.64.211.173",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "173.224.120.70",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "188.73.128.28",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.110.72.254",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.244.215.236",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "217.171.58.106",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.29.54.105",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "61.51.111.61",
        "port": "8443"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.124.13.5",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "109.224.31.37",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "210.212.54.178",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.118.199.122",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "80.237.8.138",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.43.188.8",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.217.164.43",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.64.254.228",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "82.200.253.66",
        "port": "9090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "210.91.131.24",
        "port": "42321"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.53.192.218",
        "port": "8123"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.204.221.181",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Denmark",
        "anonimity": "High +KA",
        "ipaddress": "80.63.56.146",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.53.237.78",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Bulgaria",
        "anonimity": "Low",
        "ipaddress": "85.217.130.46",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.26.22.168",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.98",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "94.200.108.10",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Mongolia",
        "anonimity": "High +KA",
        "ipaddress": "103.10.22.227",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "121.52.144.245",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.138.214.7",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "221.195.42.195",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Botswana",
        "anonimity": "Low",
        "ipaddress": "168.167.127.120",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Philippines",
        "anonimity": "High +KA",
        "ipaddress": "116.93.12.101",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "200.21.193.98",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "27.50.17.154",
        "port": "3129"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.142.236.137",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.232.224.75",
        "port": "47387"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.9.152.112",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.94",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.89.172.150",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "109.74.119.135",
        "port": "1080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.114.52.232",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "103.11.99.162",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "212.36.226.185",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.115.151.36",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.9.81.53",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "36.32.50.28",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.3.6.113",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.9.163.101",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.153.69.167",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.41.182.188",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.81.157",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.103.102.28",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Russian Federation",
        "anonimity": "High",
        "ipaddress": "81.17.16.71",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.91.179.210",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "58.215.160.55",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.214.193.147",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Peru",
        "anonimity": "Medium",
        "ipaddress": "190.187.34.107",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.239.227.81",
        "port": "8121"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.78.32.33",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "197.255.213.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.72.5.222",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Spain",
        "anonimity": "High +KA",
        "ipaddress": "178.156.33.2",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.232.90.104",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.134",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "87.248.226.210",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.54.62.59",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "78.133.155.53",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "120.29.152.130",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "190.221.146.75",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.163.231.164",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.26",
        "port": "8000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "190.79.74.32",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "24.23.200.51",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.78.3.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "South Africa",
        "anonimity": "High +KA",
        "ipaddress": "41.206.222.105",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.211.99.72",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.63.207.96",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.84.185.49",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.47.113.28",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.36.130.234",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.108.48.12",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "223.199.9.7",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.75.223.183",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.40.167.13",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "80.249.166.104",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.164.108.84",
        "port": "8844"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "201.210.50.159",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.80.240.6",
        "port": "8090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.145.24.217",
        "port": "8888"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "113.10.223.135",
        "port": "63081"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "114.30.80.251",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "113.53.254.124",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.80.136.112",
        "port": "7780"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.57.108.93",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Japan",
        "anonimity": "Low",
        "ipaddress": "49.212.129.130",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Cote D'Ivoire",
        "anonimity": "Low",
        "ipaddress": "41.189.36.26",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Philippines",
        "anonimity": "High +KA",
        "ipaddress": "116.93.12.100",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.75.119.55",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.204.104.94",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.60.80.122",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.108.92.104",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.6.102.43",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.22",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.186.35.247",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.110.1",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.107.191.184",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "122.102.43.246",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "180.178.100.81",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.150.51.105",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "United Kingdom",
        "anonimity": "Low",
        "ipaddress": "80.65.254.213",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "125.176.225.215",
        "port": "1080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.71.63.194",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "36.32.49.227",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.75.95.139",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "KENYA",
        "anonimity": "High +KA",
        "ipaddress": "212.49.70.48",
        "port": "10001"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.137.45.86",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "46.36.108.210",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "124.40.252.242",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Slovakia",
        "anonimity": "High +KA",
        "ipaddress": "213.81.168.83",
        "port": "8088"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.37.223.215",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "62.165.42.170",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "92.99.147.27",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.138.203.74",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "82.140.127.202",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.55.227.148",
        "port": "8081"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "64.130.225.8",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.191.27.216",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "180.151.27.129",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.139.117.168",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Italy",
        "anonimity": "High +KA",
        "ipaddress": "93.57.100.228",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.150.5",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.25.243.27",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "89.171.129.130",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.126.118.17",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "199.66.81.83",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.18.218.221",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.115.52.40",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.208.40.225",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "United Kingdom",
        "anonimity": "Low",
        "ipaddress": "109.204.121.123",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.54.136.118",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.75.104.179",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.211.229.5",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "200.84.144.71",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.77.244",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.224.64.12",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.170.245",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.77.202.194",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "186.145.128.121",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "175.25.243.66",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "85.172.4.154",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "85.207.17.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "190.13.173.18",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Germany",
        "anonimity": "High +KA",
        "ipaddress": "85.214.199.133",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Croatia",
        "anonimity": "High +KA",
        "ipaddress": "78.134.255.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "212.192.120.67",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Palestinian Territory, Occupied",
        "anonimity": "High +KA",
        "ipaddress": "213.244.81.244",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "95.31.18.119",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.207.187.238",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.106",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "123.202.94.191",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.203.214.161",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Japan",
        "anonimity": "Low",
        "ipaddress": "124.41.70.253",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.25.216.6",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.208.169.47",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.209.63.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.223.116.171",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "77.37.168.32",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "81.90.224.209",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.200.15.226",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.4.207.59",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.242.41.108",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.76.122",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.112.126.88",
        "port": "2345"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "27.34.241.18",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.28.12",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.182.172.2",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "212.3.132.195",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "117.239.12.120",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "116.212.107.10",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.231.163.43",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.1.174.28",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.240.86",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "80.249.166.63",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Ghana",
        "anonimity": "Low",
        "ipaddress": "197.251.135.53",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.43.57.119",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.167.112.15",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Germany",
        "anonimity": "Low",
        "ipaddress": "85.214.214.87",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.77.238",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.93.10.24",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.36.1.74",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.212.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.210.40.234",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Cuba",
        "anonimity": "High +KA",
        "ipaddress": "200.55.157.222",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Bulgaria",
        "anonimity": "Low",
        "ipaddress": "95.87.231.130",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Thailand",
        "anonimity": "High",
        "ipaddress": "203.154.19.138",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.78.156.29",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.209.65.58",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Netherlands Antilles",
        "anonimity": "High +KA",
        "ipaddress": "190.102.17.240",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "176.115.250.25",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "222.88.123.14",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Maldives",
        "anonimity": "High +KA",
        "ipaddress": "202.21.186.13",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.205.201.238",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.198.122.105",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.101.78.58",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.72.216",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "218.102.39.154",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "203.226.116.115",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.69.57",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.28.207",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "211.48.232.238",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "222.124.178.98",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.202.198.46",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "49.0.124.38",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.255.129.69",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "61.19.252.92",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "High",
        "ipaddress": "121.52.71.23",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "186.92.69.41",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "49.0.124.222",
        "port": "8000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "203.201.164.4",
        "port": "8000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "95.172.32.218",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "109.86.203.184",
        "port": "54321"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "94.137.247.36",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Netherlands",
        "anonimity": "High +KA",
        "ipaddress": "83.84.254.50",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "188.120.235.85",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.249.119.151",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "115.124.77.138",
        "port": "8081"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.206.41.24",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "95.159.105.2",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Chile",
        "anonimity": "Low",
        "ipaddress": "190.82.89.155",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "116.212.112.247",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "212.94.116.226",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "India",
        "anonimity": "High",
        "ipaddress": "210.212.152.5",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "United Kingdom",
        "anonimity": "Low",
        "ipaddress": "91.214.228.129",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "77.122.52.169",
        "port": "13579"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "183.171.240.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.76.248.144",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.209.70.241",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.165.34.210",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.105.243.179",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "119.82.239.50",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.193.205",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "203.189.136.17",
        "port": "8088"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.42.189.194",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.22.34.166",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.231.163.187",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.2.228.202",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "202.58.96.56",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.54.7.94",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "193.151.24.230",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.12.103.122",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.93.92.155",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.29.22.247",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "68.35.197.34",
        "port": "30768"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.204.168.15",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "91.98.155.120",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "193.54.67.101",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "80.249.166.65",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "183.89.69.105",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.5.102.90",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.218.85.32",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Mongolia",
        "anonimity": "High +KA",
        "ipaddress": "103.10.22.228",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.25.243.22",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Romania",
        "anonimity": "High +KA",
        "ipaddress": "93.115.206.83",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "71.237.47.207",
        "port": "1783"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.119",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.237.194.136",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.78.0.69",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.111.115.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.191.27.235",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "77.232.4.14",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.9.52.92",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "68.58.28.189",
        "port": "34625"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.146.84.52",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "49.0.124.58",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "109.195.54.231",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.68.140.113",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.148.63.91",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.112.0.222",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "186.89.124.166",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.95.108.232",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.138.248.225",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.220.92.174",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "109.205.116.179",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "94.23.52.82",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.34",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.77.135.247",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "58.215.195.66",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.204.131.250",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Netherlands Antilles",
        "anonimity": "High +KA",
        "ipaddress": "190.102.17.180",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.42",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.138.231.153",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.240.44",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.77.186.32",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.231.167.48",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.114.97.1",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.56.44.137",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "195.226.209.132",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.180.19.133",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.153.120.153",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.82.251.203",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Malaysia",
        "anonimity": "Low",
        "ipaddress": "175.140.252.53",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "202.88.224.194",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "190.151.111.202",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.241.149.56",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.77.42.232",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.94.64.100",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.132.169.89",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "121.100.25.37",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.222.98.206",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.69.254.253",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "61.247.46.55",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "210.33.40.126",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.162.126.88",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "76.31.128.184",
        "port": "1270"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.95.209.183",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.67.107.120",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.79.25.152",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "124.160.133.2",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.207.20.239",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Uzbekistan",
        "anonimity": "High +KA",
        "ipaddress": "195.69.191.201",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.154.18.7",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "95.52.243.2",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.205.110.146",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "14.204.144.202",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.11.200",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Bulgaria",
        "anonimity": "Low",
        "ipaddress": "212.233.147.48",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "201.240.171.112",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.234.252",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Germany",
        "anonimity": "High +KA",
        "ipaddress": "31.47.250.238",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.231.160.193",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.142.224",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "103.247.103.136",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.184.124.77",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "United Kingdom",
        "anonimity": "Low",
        "ipaddress": "217.155.147.206",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "182.48.191.83",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.122.196.132",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.234.192.200",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.90",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.65.67.19",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "109.207.61.160",
        "port": "8090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.67.147.202",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "KENYA",
        "anonimity": "Low",
        "ipaddress": "41.215.3.171",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.252.5.218",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.46.4.157",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "213.232.193.70",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Ghana",
        "anonimity": "Low",
        "ipaddress": "197.251.194.167",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Bangladesh",
        "anonimity": "Low",
        "ipaddress": "202.4.114.18",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "41.216.171.154",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.178.26.138",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.139.158.187",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.166.195.189",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.22.71.123",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.242.243.180",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "88.198.64.141",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Bulgaria",
        "anonimity": "High +KA",
        "ipaddress": "85.217.191.117",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.7.225.18",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Paraguay",
        "anonimity": "High +KA",
        "ipaddress": "190.211.243.50",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.111.54.16",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.136.118.98",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.57.79.99",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.192.84",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Sudan",
        "anonimity": "High +KA",
        "ipaddress": "41.67.2.2",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "61.178.178.104",
        "port": "8003"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.233.255.232",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.228.154.62",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.60.56.123",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Turkey",
        "anonimity": "Low",
        "ipaddress": "95.0.187.21",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.85.66.137",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.205.255.206",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.37.58.236",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.241.69.38",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "125.69.132.100",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "91.185.40.238",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.135.174.6",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.232",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.208.226.211",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.54.52.132",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.245.212.28",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "66.35.68.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.252.104",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Netherlands",
        "anonimity": "High +KA",
        "ipaddress": "94.214.105.237",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.164.159.33",
        "port": "8003"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.243.97.195",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "116.90.208.47",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "183.89.75.19",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "180.250.130.186",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.126.104.14",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "93.78.92.179",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.87.10.192",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.220.88.73",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.15.172.155",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.5.171.129",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.95.79.245",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Lebanon",
        "anonimity": "High +KA",
        "ipaddress": "212.98.145.98",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "France",
        "anonimity": "Low",
        "ipaddress": "62.210.226.142",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "27.188.32.31",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.37.71.162",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.137.11.181",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.153.33.79",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "49.88.182.79",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.49.101.162",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "36.32.50.65",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Nigeria",
        "anonimity": "High",
        "ipaddress": "051.222.209.77",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "14.205.32.184",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.15.120.10",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Ecuador",
        "anonimity": "Low",
        "ipaddress": "186.5.116.230",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "49.0.124.50",
        "port": "8000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "178.150.156.219",
        "port": "54321"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.33.208.250",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "101.255.33.255",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "188.163.250.229",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.236",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.15.47.185",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.76.212.230",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "195.189.249.206",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.137.47.198",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "41.203.92.50",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Uzbekistan",
        "anonimity": "High +KA",
        "ipaddress": "195.69.191.200",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.27.129.12",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "116.68.207.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "200.37.145.131",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Mexico",
        "anonimity": "High +KA",
        "ipaddress": "201.99.47.245",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "202.29.216.236",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.0.49.194",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.77.107.106",
        "port": "8082"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "221.130.199.19",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.42.112.70",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.135.242.58",
        "port": "9090"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "201.209.140.147",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.248.165.14",
        "port": "6671"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "203.124.12.71",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.166.106",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.130",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.54.83.173",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "95.215.48.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.44.14.72",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "92.241.96.85",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "203.184.128.245",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "91.219.74.234",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "93.178.218.203",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "119.235.54.54",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.183.217.246",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "90.181.178.227",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "125.39.66.146",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "217.174.96.199",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.19.151.69",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "89.162.183.115",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "115.249.170.196",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.66.226.86",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.162.173.152",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.92.208.34",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "115.249.63.244",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "119.15.82.86",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "190.79.44.28",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "197.251.132.209",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Latvia",
        "anonimity": "High +KA",
        "ipaddress": "80.90.27.60",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "184.171.247.227",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "114.6.30.210",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Saudi Arabia",
        "anonimity": "High +KA",
        "ipaddress": "84.235.87.117",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "80.249.166.67",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "203.76.140.11",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "221.141.3.152",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "202.79.24.222",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.5.159.218",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.236.220.248",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Latvia",
        "anonimity": "Low",
        "ipaddress": "195.122.20.219",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Malaysia",
        "anonimity": "Low",
        "ipaddress": "58.26.157.102",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Hungary",
        "anonimity": "Low",
        "ipaddress": "178.48.2.237",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.16.197.131",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "KENYA",
        "anonimity": "High +KA",
        "ipaddress": "41.79.9.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "109.226.65.65",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.20.106",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.211.5",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.64.89",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "46.238.208.11",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.79.73",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.182.252.197",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.73.158.28",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.17.144.132",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.199.173.122",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "173.192.222.43",
        "port": "21"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "82.194.184.30",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "79.98.73.86",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "121.100.25.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "150.165.86.22",
        "port": "8081"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "91.224.25.154",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Denmark",
        "anonimity": "High +KA",
        "ipaddress": "82.103.128.192",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "152.92.103.104",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "119.252.160.34",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Lithuania",
        "anonimity": "High +KA",
        "ipaddress": "78.60.203.238",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.3.6.22",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.2.227.123",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.129.214.155",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.8.152.246",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.192",
        "port": "443"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.53.86.248",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.178.148.8",
        "port": "8003"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.6.15.156",
        "port": "82"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.85.49.243",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.0.19.146",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "12.205.29.196",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.92",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.133.66",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Colombia",
        "anonimity": "Medium",
        "ipaddress": "190.254.20.2",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "59.49.79.121",
        "port": "9527"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "202.29.238.193",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "181.64.165.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.139.119.193",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "81.91.146.218",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.50.37.35",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "211.239.84.215",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.6.69.104",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "92.96.159.231",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.68.130",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.179.8.5",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.190.129.52",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "175.106.14.236",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.182",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.129.30.74",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.11.48.139",
        "port": "8005"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.153.181",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "203.172.218.90",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.88.211.20",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.180.14.231",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.64.74.54",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.36.49.6",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "212.40.49.29",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "210.14.143.122",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "93.78.214.219",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.250.191.143",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "109.207.61.131",
        "port": "8090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.205.144.246",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.8.128.40",
        "port": "6670"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.164.148.132",
        "port": "82"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "178.209.96.234",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.34.207.103",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.197.120.16",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "81.200.28.34",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "188.168.222.251",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.159.105.180",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.220.108.55",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.113.117.26",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Zambia",
        "anonimity": "High +KA",
        "ipaddress": "41.216.0.106",
        "port": "1080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.9.7.115",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.180.98.10",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "202.97.159.227",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.79.54.219",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.137.129.242",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "176.108.131.1",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "186.103.130.91",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "61.19.252.149",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.68.197",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.88.253.242",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.84.226.55",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.68.2.145",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.253",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "198.24.131.80",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.70.9.79",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "211.239.84.243",
        "port": "443"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.122.126.88",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.27.240.219",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "46.180.25.182",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Italy",
        "anonimity": "High +KA",
        "ipaddress": "213.144.67.65",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.220.160.186",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.215.126.175",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.61.104.79",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Latvia",
        "anonimity": "High +KA",
        "ipaddress": "85.254.187.255",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Canada",
        "anonimity": "Low",
        "ipaddress": "66.51.110.242",
        "port": "8083"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "41.78.124.53",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.97.146.152",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.194.12.33",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.198.71.45",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.120.37.134",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.108.242.105",
        "port": "41884"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Romania",
        "anonimity": "High +KA",
        "ipaddress": "89.46.49.131",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.124.2",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "95.181.33.22",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "123.54.58.242",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "201.238.227.202",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.14.232.120",
        "port": "8089"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "31.170.178.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "United Kingdom",
        "anonimity": "High +KA",
        "ipaddress": "188.64.128.1",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "112.5.254.172",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Netherlands",
        "anonimity": "High +KA",
        "ipaddress": "77.251.219.80",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Iran",
        "anonimity": "Low",
        "ipaddress": "85.185.182.1",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "200.45.236.57",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "183.166.191.243",
        "port": "8081"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.202.102",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.70.159.229",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "92.124.156.157",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.235.21.11",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "93.187.36.152",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "115.124.73.178",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.149.138.227",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.238",
        "port": "443"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "United States",
        "anonimity": "High",
        "ipaddress": "149.174.22.69",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.158.104.195",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "190.221.174.130",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.135.237.114",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "101.255.63.14",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.156.131.88",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.17.116.218",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.88.125.219",
        "port": "8083"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "186.103.136.228",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.166.194.135",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.59.193.175",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Nigeria",
        "anonimity": "Low",
        "ipaddress": "41.204.250.62",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Ecuador",
        "anonimity": "Low",
        "ipaddress": "186.101.65.115",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "109.239.38.168",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "92.96.237.202",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "92.62.54.9",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.182.166.229",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "90.189.119.126",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "183.110.231.124",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "184.169.203.214",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.195.97.70",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.15.149.175",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "72.46.130.237",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.56.33.99",
        "port": "8088"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Austria",
        "anonimity": "Low",
        "ipaddress": "195.202.159.123",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.207.65.6",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "27.131.162.50",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.106.99.22",
        "port": "888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "93.170.13.10",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Nepal",
        "anonimity": "High +KA",
        "ipaddress": "116.66.194.44",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.123.152.24",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.75.106.232",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.117.223.179",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "37.57.183.13",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.180.156.151",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.85.124.230",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.230",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.47.207.72",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "188.165.245.97",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.230.94.199",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "103.247.16.6",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.211.57.98",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.26.242",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.239.13.204",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.181.49.159",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "74.78.198.212",
        "port": "49822"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "78.9.164.162",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.146.132.205",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.188.174.15",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.42.62.140",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.106.194.124",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.192.64.16",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.116.97.183",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.69.155.100",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "89.144.190.32",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.18.107.234",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "183.154.21.76",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.80.149.98",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "41.78.125.68",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.182.5.70",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Honduras",
        "anonimity": "High +KA",
        "ipaddress": "201.220.136.150",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.89.154.14",
        "port": "9000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.201.193.164",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "110.74.192.14",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.98.134.146",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "122.144.1.213",
        "port": "9999"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.137.239.213",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "94.229.104.152",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.179.173.170",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.103.50.172",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Ireland",
        "anonimity": "Low",
        "ipaddress": "46.137.17.166",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.113.4.2",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Philippines",
        "anonimity": "Low",
        "ipaddress": "116.93.12.104",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Viet Nam",
        "anonimity": "High +KA",
        "ipaddress": "123.30.188.46",
        "port": "2214"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.11.205",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "82.207.47.7",
        "port": "3129"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.143.57.251",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.240.161",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.26.228.130",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "125.39.66.149",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.117.34.134",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.66.154",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.207.210.209",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.251.253.135",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.137.99.133",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.137.229.214",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "203.156.251.75",
        "port": "20000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "199.201.121.231",
        "port": "1080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.53.18.217",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "188.247.39.14",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "111.94.142.145",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.86.56.205",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brunei Darussalam",
        "anonimity": "High +KA",
        "ipaddress": "119.160.166.175",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "101.255.33.248",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "114.6.31.70",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "109.167.200.117",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.5.254.20",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.231.59.139",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "2.51.199.124",
        "port": "8118"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.137.147.120",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.26.228.129",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.93.14.208",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.104.98.213",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "1.234.45.130",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.163.39.194",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.29.93.90",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.144.72.153",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "91.98.111.192",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.69.241.59",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "41.75.200.75",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.68.199",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Mexico",
        "anonimity": "High +KA",
        "ipaddress": "201.147.145.146",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "219.92.31.157",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "222.83.14.145",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.73.155.126",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.162.73.122",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.223.142.146",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "176.196.169.3",
        "port": "8081"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.79.167.74",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.182.145.240",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.76.121",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "36.32.50.75",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.0.45.98",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.214.67.86",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "182.48.191.116",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "60.166.13.183",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.106.106.42",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.15.254.218",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "89.218.65.38",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.166.50.106",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "195.117.249.163",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.215.70.74",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.29.33.75",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Moldova, Republic of",
        "anonimity": "Low",
        "ipaddress": "188.138.246.47",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.216.108.11",
        "port": "8081"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.23.181.82",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.255.58.244",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Brazil",
        "anonimity": "High",
        "ipaddress": "187.5.96.141",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.248.241.72",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.76.90.32",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "95.38.32.66",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.243.101.88",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.69.17.176",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Czech Republic",
        "anonimity": "Low",
        "ipaddress": "78.80.36.194",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.101.167.119",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "117.211.123.59",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.203.214.187",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.100.52.42",
        "port": "8990"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.220.120.157",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "United Kingdom",
        "anonimity": "Low",
        "ipaddress": "46.231.11.125",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.69.237.185",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.51.230.99",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "50.22.206.179",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.204.147.157",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.89.96.251",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Spain",
        "anonimity": "High +KA",
        "ipaddress": "217.216.162.213",
        "port": "19170"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.243.199.172",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.248.29.42",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "125.39.66.148",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "212.119.97.198",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.69.195.4",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.226.98.254",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.32.0.168",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Panama",
        "anonimity": "High +KA",
        "ipaddress": "186.73.239.18",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.230.120.36",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.162.7.54",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.55.32.229",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Brazil",
        "anonimity": "Medium",
        "ipaddress": "200.202.240.174",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.64.169",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Germany",
        "anonimity": "High +KA",
        "ipaddress": "91.228.53.28",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "87.103.133.167",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.100.47.131",
        "port": "8990"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.87.234.40",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "202.38.95.75",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "27.50.19.101",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.3.32.37",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "109.74.236.165",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "82.200.236.66",
        "port": "9090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.75.27.248",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "37.77.51.162",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Afghanistan",
        "anonimity": "High +KA",
        "ipaddress": "61.5.196.6",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "202.181.199.180",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.236.206.48",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.248.241.31",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.244.215.245",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.46.2",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.207.123.17",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.29.118.245",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.19.195.208",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.28.19",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "46.105.125.47",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "78.187.167.33",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.60.49.51",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.239.161.89",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.84.92.35",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Pakistan",
        "anonimity": "Low",
        "ipaddress": "110.93.211.11",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.67.169.194",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.200.131.42",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.138.239.223",
        "port": "3124"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "186.95.202.230",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.89.154.6",
        "port": "9000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.205.56.158",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.45.236.50",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "210.14.143.53",
        "port": "7620"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "101.64.180.12",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.135.223.4",
        "port": "7000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.92.193.103",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.111",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.105.115.41",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.66.130",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "190.110.196.107",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.115",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.196.51.130",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.139.137.107",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "216.244.71.143",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.93.188.2",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Mexico",
        "anonimity": "Low",
        "ipaddress": "201.161.198.214",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.219.54.215",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "174.34.168.245",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.99.189.74",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Turkey",
        "anonimity": "Low",
        "ipaddress": "195.175.83.146",
        "port": "3129"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.62.128.172",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "190.151.8.246",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.145.113.16",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.69.254.227",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.172.158.226",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.110",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "42.121.105.138",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.125.167.253",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "186.93.187.122",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.249.14.16",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.177",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Viet Nam",
        "anonimity": "High +KA",
        "ipaddress": "101.99.3.164",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "123.110.204.70",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.134.152.175",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.84.25.5",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "200.61.31.66",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.89.172.30",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.225.212.245",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "91.218.84.195",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.172.154.72",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "80.79.179.10",
        "port": "8181"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "58.215.170.114",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.209.94.3",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.143.3.210",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.216.72.108",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "42.121.97.218",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.248.155.3",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "72.64.146.136",
        "port": "43"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.73.158.232",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Nigeria",
        "anonimity": "High",
        "ipaddress": "41.222.209.77",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.76.159.133",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "81.26.140.70",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.73.3.212",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "221.7.145.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "59.151.37.8",
        "port": "8028"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.6.254.22",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Slovakia",
        "anonimity": "High +KA",
        "ipaddress": "188.120.11.44",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.137.26.109",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.16.110.15",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.43.57.63",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "190.238.125.70",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.231.164.40",
        "port": "45238"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.80.105",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.15.232",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "85.133.162.132",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "72.64.146.135",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.144.72.154",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "41.216.170.26",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.38.48.47",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "59.37.168.16",
        "port": "8082"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.205.198.91",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.153.5.3",
        "port": "8181"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Lebanon",
        "anonimity": "High +KA",
        "ipaddress": "62.84.67.170",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.211.226.49",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "94.205.178.45",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "200.124.242.146",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "114.199.82.228",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "46.16.226.83",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "93.170.13.21",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "198.144.186.98",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.53.255.99",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.217.193.190",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "213.27.8.8",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "103.247.37.86",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.228",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.66.133",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "119.252.130.18",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.200.129.159",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.51.226.140",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "190.81.197.97",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.11.147",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Moldova, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "89.28.65.55",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Jordan",
        "anonimity": "High +KA",
        "ipaddress": "87.236.233.92",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "109.68.190.44",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Bulgaria",
        "anonimity": "Low",
        "ipaddress": "93.123.45.23",
        "port": "8008"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "186.36.94.2",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "197.251.194.46",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.36.13.213",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "82.200.254.202",
        "port": "9090"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.146.102",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "93.186.97.236",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.163.39.83",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Ukraine",
        "anonimity": "Low",
        "ipaddress": "77.222.154.28",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.119.236.236",
        "port": "9800"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.0.222.167",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "27.34.142.47",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.100.251.130",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.99.92.52",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "France",
        "anonimity": "Low",
        "ipaddress": "176.34.218.96",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.153.120.105",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "125.165.56.217",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.134.251.187",
        "port": "1098"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Ghana",
        "anonimity": "Low",
        "ipaddress": "197.251.194.121",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Ecuador",
        "anonimity": "Low",
        "ipaddress": "190.95.223.186",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.50.202.131",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Georgia",
        "anonimity": "High +KA",
        "ipaddress": "80.241.247.150",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.159.238.42",
        "port": "8081"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.50.28",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.153.5.232",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "190.116.87.4",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.78.144.69",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "168.226.214.180",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "116.255.148.5",
        "port": "8081"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.138.208.116",
        "port": "8008"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.145.93.110",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Romania",
        "anonimity": "High +KA",
        "ipaddress": "82.79.92.226",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Ghana",
        "anonimity": "Low",
        "ipaddress": "197.251.194.165",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.209.206",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Palestinian Territory, Occupied",
        "anonimity": "High +KA",
        "ipaddress": "82.213.36.226",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "124.195.6.243",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "82.201.244.110",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Hong Kong",
        "anonimity": "Low",
        "ipaddress": "112.213.118.48",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.244.190.3",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "27.123.221.122",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.198.9.110",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.86.95.55",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.94.240.243",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.66.134",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "110.153.9.250",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.206.94.81",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.138.245.95",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "200.60.11.20",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.5.254.19",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "89.18.128.230",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.162.4.253",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.153.4.133",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "82.207.68.142",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.29.30.114",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.57.25.50",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.203.107.165",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.234.27.31",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.249.85.12",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "114.6.15.158",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.207.26.222",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "KENYA",
        "anonimity": "High +KA",
        "ipaddress": "41.139.240.34",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Philippines",
        "anonimity": "High +KA",
        "ipaddress": "116.93.12.99",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.158.252.37",
        "port": "18185"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.153.122.190",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Bulgaria",
        "anonimity": "High +KA",
        "ipaddress": "85.217.191.49",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.26.216.234",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Costa Rica",
        "anonimity": "Low",
        "ipaddress": "186.176.147.173",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.95.204.182",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.99.236.217",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.66.114.152",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Canada",
        "anonimity": "Low",
        "ipaddress": "174.142.10.225",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "27.17.49.46",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.40.81",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Spain",
        "anonimity": "High +KA",
        "ipaddress": "151.237.210.97",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.8.218.239",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "KENYA",
        "anonimity": "High +KA",
        "ipaddress": "41.215.3.98",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.6.15.158",
        "port": "82"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.130.39.9",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "14.31.11.78",
        "port": "9009"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.32.36.202",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.206.15.60",
        "port": "33128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.94.168.163",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.225.61.22",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "190.101.117.160",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "110.74.197.127",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "125.39.25.202",
        "port": "8096"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.14.241.178",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.28.14",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "85.234.22.126",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.214.131.165",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.26.231.104",
        "port": "5060"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "178.219.103.205",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.192.7.134",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.210.94.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "69.55.54.209",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.136.93.38",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.198.165.134",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "163.177.76.23",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "110.36.251.166",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "93.170.13.7",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.8.93.202",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.99.186.27",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "222.45.236.42",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.43.113.18",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.120.253.1",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Nepal",
        "anonimity": "High +KA",
        "ipaddress": "27.50.11.165",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.208.194",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "157.181.63.13",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Armenia",
        "anonimity": "High +KA",
        "ipaddress": "95.140.196.34",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "182.52.106.151",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.138.232.1",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.145.16.146",
        "port": "3129"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "222.124.35.118",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "69.243.102.216",
        "port": "8123"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.205.201.63",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "210.22.115.162",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "12.54.176.16",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.148.47.124",
        "port": "11119"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.73.152.117",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.3.149.38",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "203.110.169.76",
        "port": "9128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.1.26.53",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.73.53.230",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.127.195.222",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Canada",
        "anonimity": "Low",
        "ipaddress": "174.142.10.227",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.121.154.246",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.100.47.138",
        "port": "8990"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.145.173.186",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.94.35.192",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.82.161.144",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.241.218.219",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "200.61.31.69",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.215.65.246",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "210.32.34.115",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.217.137",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.135.243.59",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "188.165.208.11",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.95.213.65",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Spain",
        "anonimity": "Low",
        "ipaddress": "84.232.70.146",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Japan",
        "anonimity": "High",
        "ipaddress": "133.242.131.152",
        "port": "443"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.22.71.125",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.13.160.95",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "190.196.19.224",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "195.140.190.146",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.181.74.185",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.4.236.81",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Uzbekistan",
        "anonimity": "High +KA",
        "ipaddress": "195.69.191.206",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Malta",
        "anonimity": "High +KA",
        "ipaddress": "213.165.183.79",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.88.52.21",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "103.246.146.149",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.14.15.71",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.203.107.169",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "218.189.179.170",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.95.221.247",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.147.37.210",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.207.15.138",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.142.236.132",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.93.168.134",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.97.212.162",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.6.107.46",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.143.139.248",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.54.194.243",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.243.143.253",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.246.23.70",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High",
        "ipaddress": "120.197.232.30",
        "port": "8086"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.118.7.233",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "180.178.96.222",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.108.11.28",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "KENYA",
        "anonimity": "High +KA",
        "ipaddress": "197.254.29.206",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "178.171.111.34",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.203.214.139",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "61.18.144.21",
        "port": "8909"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "41.76.194.40",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "KENYA",
        "anonimity": "High +KA",
        "ipaddress": "41.89.130.4",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.24.13.104",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "178.165.127.23",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.168.83.231",
        "port": "10280"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.72.9.93",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.120.161.237",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.85.131.34",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Thailand",
        "anonimity": "High",
        "ipaddress": "183.89.104.242",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "KENYA",
        "anonimity": "Low",
        "ipaddress": "41.78.26.161",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "200.4.237.133",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.248.65.44",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.247.172.101",
        "port": "6670"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.11.207.62",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "119.254.67.13",
        "port": "65333"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "85.113.141.251",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Japan",
        "anonimity": "Medium",
        "ipaddress": "203.152.216.75",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.27.241",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.35.153.131",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "183.89.78.157",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.7.99",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "183.179.38.123",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.234.29.83",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.74.187.60",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "122.160.205.81",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.55.161.172",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Kazakhstan",
        "anonimity": "Medium",
        "ipaddress": "5.9.117.232",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.199.91.54",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.230.235.245",
        "port": "6671"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Mongolia",
        "anonimity": "High +KA",
        "ipaddress": "203.194.113.110",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.55.206.210",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.207.143.176",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "98.204.109.104",
        "port": "1243"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Lebanon",
        "anonimity": "High +KA",
        "ipaddress": "178.135.63.210",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.250.15",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.242.139",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.16.249.245",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.21.9.31",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "14.125.243.9",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.89.217.147",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.213.196.12",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.26.166.155",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.199.236.74",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.229.102.249",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.98.75.50",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "173.255.142.206",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.139.116.63",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.93.178.112",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.195.135.195",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.8.226.254",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.43.188.213",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.64.51",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.235.225.194",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.42.212.235",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.60.47.56",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.122.104.74",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.102.0.54",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Serbia",
        "anonimity": "High +KA",
        "ipaddress": "82.117.196.26",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.107.51",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "175.106.14.235",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "223.4.179.153",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.240.21.11",
        "port": "6671"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "121.14.45.160",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.6.236.102",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "200.60.11.19",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "87.244.175.47",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.8.160.72",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Bosnia and Herzegovina",
        "anonimity": "High +KA",
        "ipaddress": "81.93.74.38",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.75.18.102",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "183.89.20.64",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.75.190.62",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.69.236.213",
        "port": "6670"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.55.137.88",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "125.161.185.212",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "115.69.219.226",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.108.242.100",
        "port": "48814"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "Sweden",
        "anonimity": "High +KA",
        "ipaddress": "213.185.231.4",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.187.148.102",
        "port": "8000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/40",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.136.173.207",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Mexico",
        "anonimity": "Low",
        "ipaddress": "201.144.169.18",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.17.38.227",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "193.54.120.32",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.85.86.11",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.86.244.107",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.152.35.164",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.174.63.11",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.120.49.140",
        "port": "7890"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.133.18.161",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "211.232.93.13",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "62.201.211.68",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.37.48.146",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.47.116.74",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.244.247.7",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.39.80.25",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.234.31.102",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "United Kingdom",
        "anonimity": "High +KA",
        "ipaddress": "46.231.14.49",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.111.25",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.68.184.23",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Nepal",
        "anonimity": "High +KA",
        "ipaddress": "182.93.95.81",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "197.255.212.141",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.199.70.214",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/42",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.85.204.112",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.156.8.81",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/42",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.245.239.89",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/42",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.241.39.106",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/41",
        "country": "Thailand",
        "anonimity": "High",
        "ipaddress": "180.183.70.5",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/42",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.205.16",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/42",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.241.95.101",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.90.20.227",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.241.201.93",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "103.247.16.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.21.238.34",
        "port": "8081"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.44.119.198",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.59.27.32",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "125.211.198.74",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Italy",
        "anonimity": "Low",
        "ipaddress": "37.98.227.34",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.7.213.216",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.133.93.162",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Lebanon",
        "anonimity": "High +KA",
        "ipaddress": "178.135.52.10",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.11.38.182",
        "port": "9090"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.96",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "213.110.196.11",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.247.21.212",
        "port": "3131"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "198.154.114.100",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.41.88.202",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "92.63.64.48",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "151.232.50.1",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "115.248.218.33",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Nepal",
        "anonimity": "High +KA",
        "ipaddress": "27.50.8.18",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "188.3.100.210",
        "port": "8087"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.125.35.195",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "103.23.139.97",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.191.127.218",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "41.204.250.61",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.195.15.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Tanzania, United Republic of",
        "anonimity": "High +KA",
        "ipaddress": "41.73.204.29",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.186.160.86",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "163.177.76.17",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.150.115.26",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "145.236.211.182",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "202.179.66.34",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "159.253.237.14",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.103.223.176",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "222.124.207.29",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.2.180",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.36.60.56",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.193.98",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Latvia",
        "anonimity": "High +KA",
        "ipaddress": "87.110.149.88",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.215.155.38",
        "port": "8090"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.10.40.232",
        "port": "83"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "84.244.12.111",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "188.136.216.130",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "62.201.207.14",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "193.232.174.65",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.80.108",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/2",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "101.255.60.162",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Serbia",
        "anonimity": "High +KA",
        "ipaddress": "178.254.152.242",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "212.79.108.234",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.112.128.97",
        "port": "8123"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.13.79.20",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "182.160.117.115",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.60.137.121",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.85.233.190",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Uzbekistan",
        "anonimity": "High +KA",
        "ipaddress": "195.69.191.204",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.75.69.19",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.215.207.141",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "114.112.189.58",
        "port": "32432"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.255.234.73",
        "port": "3288"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.48.26.234",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.201.228.131",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.99.176.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Germany",
        "anonimity": "High +KA",
        "ipaddress": "193.17.184.49",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.109.206.184",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.177.51.194",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "36.32.50.81",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.82",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "95.79.55.210",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.223.210",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "122.72.28.24",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/3",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.236.216.116",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "118.175.6.210",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "119.82.69.212",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.182.33.11",
        "port": "6801"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "195.112.255.99",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "101.255.33.1",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "27.251.29.226",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.11.131",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Hungary",
        "anonimity": "Low",
        "ipaddress": "213.134.24.177",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.58.124.69",
        "port": "3131"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.25.100.210",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "46.252.244.178",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.6.15.157",
        "port": "82"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.207.220.140",
        "port": "2010"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.139.61.141",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.75.89.222",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.73.163.220",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.215.233.110",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.87.242.194",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "118.123.221.13",
        "port": "17829"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "180.250.165.197",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.190.130.214",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/4",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "201.219.3.119",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.63.15.61",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.7.221.136",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.20.25.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "91.229.216.67",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Paraguay",
        "anonimity": "High +KA",
        "ipaddress": "190.128.138.114",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Mongolia",
        "anonimity": "High +KA",
        "ipaddress": "180.149.76.3",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "222.89.55.123",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "201.208.49.238",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "77.123.76.178",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.7.221.135",
        "port": "83"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "200.110.44.31",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.215.31.226",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Nepal",
        "anonimity": "High +KA",
        "ipaddress": "117.121.238.17",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.183.31.140",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "112.133.201.70",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.138.248.4",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.7.221.137",
        "port": "83"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.202.241.180",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "168.226.35.19",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.123.218.181",
        "port": "6668"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.80.200.218",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.208.251.212",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.28.202.22",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/5",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "2.51.198.33",
        "port": "8118"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Cambodia",
        "anonimity": "Low",
        "ipaddress": "110.74.199.25",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "92.50.172.186",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.43.188.5",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.11.8.90",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "192.119.145.17",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.17.173.13",
        "port": "8088"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.118.7.129",
        "port": "14321"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "221.130.199.98",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "79.175.187.2",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Ghana",
        "anonimity": "Low",
        "ipaddress": "197.251.194.161",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.68.198",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "199.241.184.143",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.133.12.116",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.216.7.28",
        "port": "3079"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.109.228.67",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.6.72.133",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "103.6.180.161",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.166.253.239",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Belarus",
        "anonimity": "High +KA",
        "ipaddress": "93.84.115.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.135.238.162",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.6.85.171",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/6",
        "country": "Mongolia",
        "anonimity": "High +KA",
        "ipaddress": "218.100.84.123",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.50.202.133",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "124.248.211.117",
        "port": "443"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.214.159.104",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "190.223.53.70",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.167.112.17",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "190.199.99.80",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.97.91.129",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.113.242.78",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.253.158.131",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.122.90",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.70.136.158",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "222.124.147.105",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.144.76.58",
        "port": "9000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "115.254.24.137",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.251.211.108",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "175.165.102.215",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "88.156.218.216",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "151.232.55.172",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.57.25.78",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.78.153",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "190.111.122.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "178.18.17.250",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/7",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.229.237.201",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Norway",
        "anonimity": "High +KA",
        "ipaddress": "94.246.47.32",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.105.5.137",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.160.126",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "195.200.199.98",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.0.58.58",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "210.4.73.231",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.231.9.83",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.9.48.84",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "223.27.145.10",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Georgia",
        "anonimity": "Low",
        "ipaddress": "213.131.41.6",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.87.105.221",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.210.206.202",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Europe",
        "anonimity": "High +KA",
        "ipaddress": "185.8.2.50",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.95.129.231",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "198.144.176.54",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "216.244.71.142",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.202.16.129",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.43.188.4",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.28.4.131",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "109.197.92.60",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.56.208.233",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/8",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.60.53.207",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.179.220.82",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "82.208.1.53",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.247",
        "port": "443"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.64.129.213",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "122.144.12.131",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.172.109.33",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Latvia",
        "anonimity": "Low",
        "ipaddress": "80.90.12.36",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.165.47.91",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Albania",
        "anonimity": "High +KA",
        "ipaddress": "46.252.38.130",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "82.99.255.68",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.55.245.170",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "94.153.238.42",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "125.141.206.36",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Lithuania",
        "anonimity": "High +KA",
        "ipaddress": "62.80.253.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "201.238.227.201",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Italy",
        "anonimity": "High +KA",
        "ipaddress": "93.62.135.138",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "80.191.250.156",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Latvia",
        "anonimity": "High +KA",
        "ipaddress": "195.13.197.220",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "115.111.7.250",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "94.200.177.114",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.54.183.229",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/9",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "89.73.177.208",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.244.143.74",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Georgia",
        "anonimity": "High +KA",
        "ipaddress": "212.72.150.222",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.95.197.51",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.142.92.109",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.210.188.35",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.191.150.153",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Germany",
        "anonimity": "High +KA",
        "ipaddress": "46.38.240.69",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "94.205.190.5",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.27.8.150",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.220",
        "port": "443"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.213.210.22",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.133.92.154",
        "port": "9090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.183.104.21",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Colombia",
        "anonimity": "High",
        "ipaddress": "200.75.51.148",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "63.141.249.37",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Denmark",
        "anonimity": "High +KA",
        "ipaddress": "80.63.56.147",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Bulgaria",
        "anonimity": "High +KA",
        "ipaddress": "78.130.187.170",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.223.91.249",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Moldova, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "109.185.118.156",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.106.16.36",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "178.212.124.111",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.115.76.68",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.164.128.4",
        "port": "8003"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/10",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.96.215.87",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.161.152.102",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.97.22.204",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.69.227.87",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.188.145",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.208.251.216",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "80.191.177.33",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.234.24.195",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "202.57.162.58",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.203.105.24",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.208",
        "port": "443"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.117.126.91",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.129.251.175",
        "port": "9001"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.97.63.227",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "190.105.24.13",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "220.132.92.99",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "125.39.66.147",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "171.101.144.18",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "186.103.129.84",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "197.251.194.168",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.102.140.177",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "203.114.112.101",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "62.173.37.204",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.6.92.154",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/11",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.85.233.3",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "94.74.137.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.103.228.159",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.200.58.162",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.248.239.190",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.11.129",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.135.237.154",
        "port": "9090"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.105.134.41",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.2.3.222",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.147.146.14",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.11.198",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.0.61.194",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "89.218.68.38",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.100.47.244",
        "port": "8990"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Bangladesh",
        "anonimity": "Low",
        "ipaddress": "182.160.107.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Uzbekistan",
        "anonimity": "High +KA",
        "ipaddress": "195.69.191.203",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "222.232.220.90",
        "port": "42321"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "186.241.102.54",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "186.112.140.10",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Uzbekistan",
        "anonimity": "High +KA",
        "ipaddress": "195.69.191.202",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.19.220.89",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.166.143.122",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.29.217.227",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/12",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.101.41.39",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.133.125.186",
        "port": "50634"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.163.66.189",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.206.28",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.162.198.178",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.42.225.188",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.28.254.77",
        "port": "880"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.32.127.163",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "121.100.25.43",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "222.124.218.164",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.122.235.194",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.135.209.203",
        "port": "81"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "14.139.232.24",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.99.3",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.129.76.2",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "117.20.60.240",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "113.193.187.228",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "94.183.36.43",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.246.63.48",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.133.93.10",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.179.41.22",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.8.40.14",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/13",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.216.144.199",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "France",
        "anonimity": "High",
        "ipaddress": "82.234.189.34",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "59.21.114.99",
        "port": "5577"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "United Arab Emirates",
        "anonimity": "High +KA",
        "ipaddress": "94.59.183.231",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Nigeria",
        "anonimity": "High +KA",
        "ipaddress": "41.78.103.42",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "208.68.37.137",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.99.203.2",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Brunei Darussalam",
        "anonimity": "High",
        "ipaddress": "119.160.168.77",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.48.107.220",
        "port": "9000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.47.113.29",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Hong Kong",
        "anonimity": "High +KA",
        "ipaddress": "220.246.4.74",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.83.192",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "91.121.27.218",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "India",
        "anonimity": "Low",
        "ipaddress": "59.90.174.96",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Estonia",
        "anonimity": "High +KA",
        "ipaddress": "95.129.199.70",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.180.27.211",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.7.158.209",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "106.3.98.82",
        "port": "82"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.75.247.24",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "74.221.211.117",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.119.199.147",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.85.218.108",
        "port": "40000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/14",
        "country": "Serbia",
        "anonimity": "High +KA",
        "ipaddress": "87.250.37.50",
        "port": "800"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "59.172.208.186",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "91.202.164.29",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.191.27.81",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "95.82.73.36",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "118.244.190.35",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.220.202.91",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.35.12.252",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "197.251.195.109",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "103.10.60.110",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.164.34.242",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "49.0.96.1",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "125.162.196.69",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "118.91.234.48",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.75.49.142",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Argentina",
        "anonimity": "Low",
        "ipaddress": "200.42.56.146",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.6.43.201",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.80.82.83",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "103.5.49.37",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Iraq",
        "anonimity": "Low",
        "ipaddress": "109.224.62.197",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "183.63.145.116",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.213.66.172",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "202.165.234.1",
        "port": "8888"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.43.72.250",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/15",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "176.37.88.107",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.155.81.58",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "182.52.86.95",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.146.1.162",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.131.190.170",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "151.232.50.33",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.55.141.12",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Iran",
        "anonimity": "High",
        "ipaddress": "77.237.73.3",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.154.46.138",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "222.74.98.234",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "149.5.38.209",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.97.58.166",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "222.178.158.245",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.129.62.159",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "125.163.227.77",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.60.44.136",
        "port": "88"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "190.40.231.4",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.203.105.26",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.132.132.120",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.135.237.34",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.93.115.248",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.149.65",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.208.46.108",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Viet Nam",
        "anonimity": "High +KA",
        "ipaddress": "118.70.129.101",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Kazakhstan",
        "anonimity": "Low",
        "ipaddress": "82.200.253.82",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/16",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "193.150.65.101",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Honduras",
        "anonimity": "High +KA",
        "ipaddress": "190.92.86.140",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.149.78.234",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.96.71.91",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.23.119.226",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.204.242.60",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "89.218.68.142",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.182.202.21",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "84.42.3.3",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.82.46.184",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Netherlands",
        "anonimity": "High +KA",
        "ipaddress": "77.250.34.202",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.31.178.46",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "124.81.208.34",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.22.138.166",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "212.33.200.242",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.151.208.58",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.124.28.62",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.77.233.123",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.73.248.92",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.252.153.229",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.58.71.182",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.100.60.198",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.204.219.52",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.167.112.14",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/17",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.174.23.6",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "101.0.5.161",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.206.203.252",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "140.206.61.166",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Lebanon",
        "anonimity": "High +KA",
        "ipaddress": "46.235.94.178",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.130.109.23",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "195.199.215.52",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.207.140.93",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "220.163.222.171",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.89.165.131",
        "port": "6060"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.77.129.2",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High",
        "ipaddress": "218.1.98.13",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.198.45.171",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "193.93.229.157",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.64.247.3",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "27.131.161.17",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.138.207.142",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "118.32.75.189",
        "port": "42321"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.196.117.40",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "130.255.90.218",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "112.217.228.212",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Denmark",
        "anonimity": "High +KA",
        "ipaddress": "82.143.210.108",
        "port": "8123"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.36.203.60",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "93.170.13.24",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/18",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.204.175.41",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Chile",
        "anonimity": "Low",
        "ipaddress": "190.82.89.154",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.94.252",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.80.101",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.210",
        "port": "443"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "103.247.16.129",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.220.157.210",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "178.251.213.134",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.46.187.43",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "201.209.69.131",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.119.115.59",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.48.107.219",
        "port": "9000"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.251.77.13",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "180.241.238.147",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "101.255.33.249",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "200.109.212.155",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "181.64.53.196",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.85.37.90",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.208.251.213",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.202.130.170",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "97.77.96.226",
        "port": "43719"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Germany",
        "anonimity": "Low",
        "ipaddress": "94.249.207.63",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.114.191",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Israel",
        "anonimity": "High +KA",
        "ipaddress": "62.219.109.179",
        "port": "8555"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/19",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.182.190.152",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Lithuania",
        "anonimity": "High +KA",
        "ipaddress": "78.63.208.158",
        "port": "54321"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "61.147.79.56",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.6.167.107",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.126.83.61",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.138.176.135",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "219.83.100.195",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.143.148.55",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "116.255.218.51",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "42.121.112.145",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.195",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.39.14.82",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Luxembourg",
        "anonimity": "High +KA",
        "ipaddress": "94.242.237.136",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.49.14.21",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Viet Nam",
        "anonimity": "High +KA",
        "ipaddress": "222.255.27.140",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.94.8.116",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "77.78.104.129",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.204.15.224",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.200.61.237",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.124.3",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.76.98.98",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.180.56.92",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/20",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.206.194",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "2.133.92.157",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.53.24.216",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "202.29.60.220",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.10.138.172",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.218.152.92",
        "port": "8888"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Singapore",
        "anonimity": "Low",
        "ipaddress": "202.166.80.105",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.212.184.11",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.177.239",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.112.66.102",
        "port": "808"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.12.116.18",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.145.26.6",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "201.218.63.4",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.252.56.148",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.43.65.130",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.195.176.77",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.182.190.154",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "175.103.37.139",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.51.118.14",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.142.137.99",
        "port": "50808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Nicaragua",
        "anonimity": "High +KA",
        "ipaddress": "186.1.1.75",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.23.21.36",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "46.175.187.4",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.251",
        "port": "443"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/21",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.93.50.196",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.2.152.107",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "69.29.105.153",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.26.138.120",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.198.11.2",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.10.122.118",
        "port": "6669"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.62.150.118",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Libyan Arab Jamahiriya",
        "anonimity": "High +KA",
        "ipaddress": "41.208.68.20",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "119.59.100.146",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Venezuela",
        "anonimity": "Medium",
        "ipaddress": "190.153.2.22",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.21.238.38",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.102.205.150",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.238.1.23",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Spain",
        "anonimity": "Low",
        "ipaddress": "213.181.73.145",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "180.235.151.193",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.121.149.154",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.240.187.81",
        "port": "81"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.199.253.248",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.239.32.97",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "42.121.16.222",
        "port": "8092"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Costa Rica",
        "anonimity": "High +KA",
        "ipaddress": "201.205.49.48",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.14.255.234",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "93.17.234.38",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Afghanistan",
        "anonimity": "High +KA",
        "ipaddress": "180.222.142.210",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/22",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.78.2.84",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Hungary",
        "anonimity": "High +KA",
        "ipaddress": "89.133.129.15",
        "port": "5349"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.27.166.201",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.138.216.157",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.208.59.222",
        "port": "6672"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.123.118.221",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.233",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "KENYA",
        "anonimity": "High +KA",
        "ipaddress": "41.215.77.250",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Cambodia",
        "anonimity": "Low",
        "ipaddress": "119.82.253.88",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.47.84.139",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.129.242.131",
        "port": "8081"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "212.119.105.65",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.194.112.22",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "89.234.195.145",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "201.249.28.151",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.63.234.193",
        "port": "14001"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.242.219",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.17.171.1",
        "port": "8088"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Palestinian Territory, Occupied",
        "anonimity": "High +KA",
        "ipaddress": "188.225.185.126",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.38.124.241",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.181.231",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.88.74.91",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.164.148.134",
        "port": "81"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.94.252.216",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/23",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.208.251.218",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.227.156.179",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "27.116.21.162",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "221.237.163.88",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.11.132",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.236.19.48",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.39.68.196",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Ecuador",
        "anonimity": "High +KA",
        "ipaddress": "186.5.117.146",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "182.52.86.254",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "118.174.133.14",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.77.202.69",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.197.148.4",
        "port": "21"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "91.221.176.163",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.203.105.243",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.38.115.84",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.231",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.63.168.253",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "83.242.255.72",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.203.214.182",
        "port": "82"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.134.158.54",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.200.2.129",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Bulgaria",
        "anonimity": "High +KA",
        "ipaddress": "46.249.66.50",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "103.247.16.9",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "123.162.1.188",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/24",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "106.51.66.181",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "119.82.231.20",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "113.212.125.30",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Peru",
        "anonimity": "Low",
        "ipaddress": "190.40.141.142",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.167.231.184",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "36.32.50.171",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "198.102.29.195",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.60.20.252",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "78.38.23.241",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "37.77.51.190",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.146.34.44",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "KENYA",
        "anonimity": "High +KA",
        "ipaddress": "197.254.11.30",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Egypt",
        "anonimity": "Low",
        "ipaddress": "41.191.27.5",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.207.142.27",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.77.125.152",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.139.25.18",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.204.107.124",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.240.187.76",
        "port": "81"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.178.158.247",
        "port": "82"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.191.27.144",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.36.52.138",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.198.89.61",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "186.93.56.149",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "Sweden",
        "anonimity": "High +KA",
        "ipaddress": "87.236.209.127",
        "port": "443"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/25",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.142.236.133",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.11.201",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "210.101.131.231",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.85.64.219",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "27.111.38.253",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.38.33.124",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.244.125",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "183.129.249.83",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "89.188.224.70",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.74.163.131",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "176.33.138.156",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Colombia",
        "anonimity": "Medium",
        "ipaddress": "190.97.204.37",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.90.113.21",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.80.106",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.199.40.20",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.123.207",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Macedonia",
        "anonimity": "High +KA",
        "ipaddress": "88.85.108.16",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Ghana",
        "anonimity": "High +KA",
        "ipaddress": "41.210.59.221",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.242.171.14",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "95.82.35.130",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "178.209.127.5",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.250.0.28",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.22.71.126",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "190.73.44.182",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/26",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.143.135.4",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "190.40.142.175",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.69.228.133",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "109.224.63.84",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.90.36.8",
        "port": "8000"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Albania",
        "anonimity": "High +KA",
        "ipaddress": "79.98.112.11",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "210.51.44.48",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.131.87.184",
        "port": "60000"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.182.190.155",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.30.118",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Canada",
        "anonimity": "Low",
        "ipaddress": "174.142.10.231",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "188.158.180.118",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.166.55.153",
        "port": "11808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.211.246.153",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "France",
        "anonimity": "High +KA",
        "ipaddress": "82.243.173.16",
        "port": "33164"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.193.17.162",
        "port": "8888"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.84.114.231",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "66.168.170.55",
        "port": "53020"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.28.10",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.0.17.202",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Italy",
        "anonimity": "High +KA",
        "ipaddress": "94.23.68.66",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.93.189.66",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "175.139.76.229",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/27",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.104.166.172",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "187.19.12.64",
        "port": "3129"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Turkey",
        "anonimity": "High +KA",
        "ipaddress": "88.250.173.22",
        "port": "8090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Latvia",
        "anonimity": "High +KA",
        "ipaddress": "159.148.4.209",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Mongolia",
        "anonimity": "High +KA",
        "ipaddress": "103.10.22.226",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.108.85.59",
        "port": "82"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.14.246.154",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Mongolia",
        "anonimity": "Low",
        "ipaddress": "103.10.22.231",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "31.25.141.22",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Venezuela",
        "anonimity": "Medium",
        "ipaddress": "190.153.2.246",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "183.89.44.77",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.0.28",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "101.255.33.254",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.4.78.26",
        "port": "34808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "176.97.14.217",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.31.91",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.43.188.9",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.63.18.22",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.240.187.79",
        "port": "83"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.69.105.154",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.95.95.210",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "74.221.215.254",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.240.187.80",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/28",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.93.53.114",
        "port": "8888"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Iran",
        "anonimity": "Low",
        "ipaddress": "78.38.80.142",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.11.198.36",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.15.231",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.135.204.243",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Bangladesh",
        "anonimity": "Low",
        "ipaddress": "210.4.73.84",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "111.68.107.133",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.128.2.219",
        "port": "83"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "49.212.54.176",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Russian Federation",
        "anonimity": "High",
        "ipaddress": "46.232.207.230",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Uzbekistan",
        "anonimity": "High +KA",
        "ipaddress": "195.69.191.199",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Poland",
        "anonimity": "Low",
        "ipaddress": "176.115.250.33",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "202.43.188.10",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "110.138.211.21",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "United States",
        "anonimity": "High",
        "ipaddress": "128.208.04.198",
        "port": "2124"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.107.132.66",
        "port": "2345"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Viet Nam",
        "anonimity": "High +KA",
        "ipaddress": "123.30.174.61",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "183.89.80.139",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "82.200.253.58",
        "port": "9090"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "49.0.3.222",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "149.62.146.122",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.5.72.157",
        "port": "808"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Colombia",
        "anonimity": "Low",
        "ipaddress": "190.0.46.66",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.65.247",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/29",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "58.20.61.88",
        "port": "9090"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Bulgaria",
        "anonimity": "High +KA",
        "ipaddress": "85.217.191.109",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "124.81.113.183",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.180.48.38",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.199.63.12",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.91.213.114",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.99.8",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.248.100.194",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.88.75.151",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.156.222.176",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.96.127.10",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "201.248.127.193",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.43.188.12",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "190.38.162.216",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "177.84.96.140",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "219.143.207.140",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "174.34.168.242",
        "port": "49491"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.206",
        "port": "443"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.84.81.70",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "186.89.100.124",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.115.65.187",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.74.164.89",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.2.190",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.160.210.187",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/30",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "200.110.35.150",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Malaysia",
        "anonimity": "High +KA",
        "ipaddress": "175.140.251.216",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "190.223.53.198",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Germany",
        "anonimity": "Low",
        "ipaddress": "212.144.254.122",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.80.107",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Colombia",
        "anonimity": "High +KA",
        "ipaddress": "190.25.231.8",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Argentina",
        "anonimity": "High +KA",
        "ipaddress": "190.3.108.211",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.201.1.119",
        "port": "8001"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "93.90.235.178",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.55.141.10",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "200.158.210.183",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.27.240.221",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "103.4.147.108",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "103.6.207.99",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.185.182.50",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "182.30.3.22",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.199.221.136",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.198.17.141",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.115.86.98",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.97.206.146",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.142.236.136",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "66.35.68.145",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.3.149.243",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.80.218.181",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.165.161.254",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/31",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.16.47.106",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Argentina",
        "anonimity": "Medium",
        "ipaddress": "190.52.38.92",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.3.26.67",
        "port": "8082"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.142.190.177",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "178.169.97.35",
        "port": "54321"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "46.45.32.71",
        "port": "3129"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "125.42.221.245",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Ukraine",
        "anonimity": "High +KA",
        "ipaddress": "194.12.67.100",
        "port": "54321"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "211.154.151.218",
        "port": "88"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.43.37.122",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "62.201.210.190",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.106.20.222",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.31.17.255",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.33.245.16",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Poland",
        "anonimity": "High +KA",
        "ipaddress": "31.135.196.229",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "202.102.58.208",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "201.6.108.59",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.133.17.229",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "115.248.149.89",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Colombia",
        "anonimity": "High",
        "ipaddress": "200.75.51.149",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.120.244.137",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "59.46.67.107",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.122.32.44",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "201.248.225.120",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/32",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.207.195.204",
        "port": "19081"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "115.124.70.66",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.239.140",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "190.198.88.190",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.203.215.6",
        "port": "85"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.116.1.149",
        "port": "8128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.228.41.220",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "123.108.14.39",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "180.120.117.14",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "61.155.140.154",
        "port": "55808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "200.54.92.187",
        "port": "68664"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Japan",
        "anonimity": "High +KA",
        "ipaddress": "106.187.101.243",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Philippines",
        "anonimity": "High +KA",
        "ipaddress": "116.50.153.66",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "186.219.25.227",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "202.114.205.125",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "58.250.87.125",
        "port": "81"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.11.93.146",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "223.4.205.37",
        "port": "808"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "203.110.169.83",
        "port": "9128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.207.205.82",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "202.28.143.25",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.5.243.115",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "182.113.221.188",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.132.138.69",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "85.185.83.206",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/33",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.223.252.150",
        "port": "56142"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "United States",
        "anonimity": "Low",
        "ipaddress": "66.23.230.231",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "200.84.225.54",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Azerbaijan",
        "anonimity": "Low",
        "ipaddress": "213.172.72.100",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "177.135.72.37",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.252.7.231",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.28.112.114",
        "port": "809"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.67.69.52",
        "port": "8003"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "211.142.236.131",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "218.28.254.242",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.227.132.54",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.1.105.24",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "117.34.72.51",
        "port": "808"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.199.63.244",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "201.65.24.245",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Bulgaria",
        "anonimity": "High +KA",
        "ipaddress": "95.87.239.115",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "202.143.190.74",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Venezuela",
        "anonimity": "High",
        "ipaddress": "186.95.84.51",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.254.132.137",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "211.239.84.217",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "187.103.248.100",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "118.183.189.193",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "120.132.132.119",
        "port": "88"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.138.232.160",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "Iran",
        "anonimity": "Low",
        "ipaddress": "78.39.47.131",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/34",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "123.130.217.91",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "118.82.9.134",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.234.38.73",
        "port": "6674"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Singapore",
        "anonimity": "High +KA",
        "ipaddress": "115.66.191.7",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "124.118.53.208",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.38.72.234",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "218.56.246.244",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "122.72.0.6",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "186.89.163.223",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "186.95.195.121",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Germany",
        "anonimity": "Low",
        "ipaddress": "176.9.47.143",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Mexico",
        "anonimity": "High +KA",
        "ipaddress": "200.52.141.150",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Egypt",
        "anonimity": "High +KA",
        "ipaddress": "41.42.246.224",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "199.101.98.165",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Montenegro",
        "anonimity": "Low",
        "ipaddress": "46.161.81.203",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "114.101.116.106",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.38.77.104",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Moldova, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "77.89.233.54",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.123.45.207",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Ecuador",
        "anonimity": "Low",
        "ipaddress": "190.95.223.209",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "110.77.250.128",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Ecuador",
        "anonimity": "Low",
        "ipaddress": "186.42.212.236",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "110.255.183.63",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "188.128.99.94",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/35",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.206.34.130",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.52.77.225",
        "port": "6675"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "202.182.49.41",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.217.164.50",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.2.9.122",
        "port": "6668"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Nepal",
        "anonimity": "High +KA",
        "ipaddress": "202.166.194.26",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "1.204.172.197",
        "port": "6673"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.243.221.77",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Guatemala",
        "anonimity": "High +KA",
        "ipaddress": "200.12.44.117",
        "port": "1080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "14.139.241.20",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "89.223.107.49",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Peru",
        "anonimity": "High +KA",
        "ipaddress": "200.60.11.21",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "198.154.114.118",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "222.208.32.15",
        "port": "6666"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "219.141.117.107",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "91.228.65.173",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "62.105.136.90",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "62.176.9.165",
        "port": "3128"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "113.143.194.115",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "62.117.65.109",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "61.19.71.146",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.200.251.158",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "116.90.172.46",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Chile",
        "anonimity": "High +KA",
        "ipaddress": "190.96.64.234",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "120.50.0.59",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/36",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "27.50.22.26",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.249.227.131",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "111.122.35.119",
        "port": "6673"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.62.136.231",
        "port": "6668"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Paraguay",
        "anonimity": "Low",
        "ipaddress": "186.16.203.50",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Bangladesh",
        "anonimity": "High +KA",
        "ipaddress": "180.211.191.146",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "KENYA",
        "anonimity": "High +KA",
        "ipaddress": "41.76.170.17",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Thailand",
        "anonimity": "Low",
        "ipaddress": "110.77.209.218",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Uzbekistan",
        "anonimity": "High +KA",
        "ipaddress": "195.69.191.197",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "116.12.47.66",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "60.221.75.114",
        "port": "6666"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "Medium",
        "ipaddress": "111.161.30.237",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "119.110.69.70",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.95.102",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "119.1.19.56",
        "port": "6666"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Kyrgyzstan",
        "anonimity": "High +KA",
        "ipaddress": "212.112.98.168",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Brunei Darussalam",
        "anonimity": "High +KA",
        "ipaddress": "119.160.177.34",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.36.10.83",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "119.73.6.165",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "213.233.161.69",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Taiwan",
        "anonimity": "High +KA",
        "ipaddress": "210.241.19.152",
        "port": "80"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "61.167.49.188",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "200.151.66.66",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Pakistan",
        "anonimity": "High +KA",
        "ipaddress": "119.73.33.31",
        "port": "8118"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Kazakhstan",
        "anonimity": "High +KA",
        "ipaddress": "213.157.36.82",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/37",
        "country": "Nigeria",
        "anonimity": "Low",
        "ipaddress": "41.73.2.36",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Indonesia",
        "anonimity": "Low",
        "ipaddress": "110.136.231.125",
        "port": "8080"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "112.251.160.243",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "115.49.113.118",
        "port": "6673"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Iraq",
        "anonimity": "High +KA",
        "ipaddress": "31.25.143.195",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "India",
        "anonimity": "High +KA",
        "ipaddress": "124.125.252.244",
        "port": "1080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Korea, Republic of",
        "anonimity": "Low",
        "ipaddress": "210.101.131.232",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Thailand",
        "anonimity": "High +KA",
        "ipaddress": "180.183.124.71",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Cambodia",
        "anonimity": "High +KA",
        "ipaddress": "103.246.145.184",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "122.72.124.42",
        "port": "80"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Korea, Republic of",
        "anonimity": "High +KA",
        "ipaddress": "211.239.84.224",
        "port": "443"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "United States",
        "anonimity": "High +KA",
        "ipaddress": "66.85.169.176",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Saudi Arabia",
        "anonimity": "High +KA",
        "ipaddress": "212.93.195.229",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "210.51.37.167",
        "port": "3389"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Brazil",
        "anonimity": "High +KA",
        "ipaddress": "189.41.51.56",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Indonesia",
        "anonimity": "High +KA",
        "ipaddress": "118.99.104.169",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Brazil",
        "anonimity": "Low",
        "ipaddress": "189.15.29.196",
        "port": "3128"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "India",
        "anonimity": "Low",
        "ipaddress": "14.102.2.6",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Honduras",
        "anonimity": "High +KA",
        "ipaddress": "190.92.87.18",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Venezuela",
        "anonimity": "Low",
        "ipaddress": "190.142.211.89",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Russian Federation",
        "anonimity": "High +KA",
        "ipaddress": "87.245.183.162",
        "port": "8080"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Czech Republic",
        "anonimity": "High +KA",
        "ipaddress": "81.201.61.138",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Russian Federation",
        "anonimity": "Low",
        "ipaddress": "176.113.32.51",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "Low",
        "ipaddress": "219.150.254.158",
        "port": "8080"
    },
    {
        "_type": "HTTP",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "Netherlands Antilles",
        "anonimity": "High +KA",
        "ipaddress": "190.102.30.19",
        "port": "80"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/38",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "116.95.87.74",
        "port": "6675"
    },
    {
        "_type": "socks4/5",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "China",
        "anonimity": "High +KA",
        "ipaddress": "183.166.220.20",
        "port": "6675"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Iran",
        "anonimity": "High +KA",
        "ipaddress": "78.39.68.145",
        "port": "3128"
    },
    {
        "_type": "HTTPS",
        "url": "http://hidemyass.com/proxy-list/39",
        "country": "Venezuela",
        "anonimity": "High +KA",
        "ipaddress": "190.203.38.163",
        "port": "8080"
    }
];
for (var i = 0; i < a.length;i++) {
 if (a[i].ipaddress == ip) {
   return true;
 }
}
return false;
}