const freelancers = [
    {
        key: 'ksbgos005341',
        name: 'Eduardo Catabay Jr',
        role: 'Copy Writer',
        age: 38,
        country: 'Philippines',
        salary: 85000,
        star: 4,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F2411386-60fae2b59c585.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005342',
        name: 'Salman Farabi',
        role: 'Conten Writer',
        age: 28,
        country: 'Pakistan',
        salary: 73000,
        star: 3,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F2078752-61338d056807d.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005343',
        name: 'Boniface Njuguna',
        role: 'WordPress Guru',
        age: 33,
        country: 'Kenya',
        salary: 88000,
        star: 5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F556451-60a266ad8c19e.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005344',
        name: 'Roxana Acosta Sosa',
        role: 'Content Developer',
        age: 31,
        country: 'Argentina',
        salary: 65000,
        star: 3,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F244639-5a264072a6544.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005345',
        name: 'Er. S Mishra',
        role: 'Affiliate Writer',
        age: 29,
        country: 'India',
        salary: 61000,
        star: 2.5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F1910721-61155fa2348d4.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005346',
        name: 'Chimdike Omejua',
        role: 'Graphic Designer',
        age: 27,
        country: 'Nigeria',
        salary: 71000,
        star: 4.5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F1864827-5f50b38adc7fc.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005347',
        name: 'Pratyush Nema',
        role: 'Security Researcher',
        age: 26,
        country: 'India',
        salary: 91000,
        star: 5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F1262566-5f3b519963f6f.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005348',
        name: 'LeadGenRakib',
        role: 'Lead Generation',
        age: 24,
        country: 'Bangladesh',
        salary: 51000,
        star: 2.5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F657947-60dcef9c274ba.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005349',
        name: 'Damini Agrawal',
        role: 'Web Research',
        age: 25,
        country: 'India',
        salary: 67000,
        star: 3.5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F588735-5ddfeca6cd596.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005350',
        name: 'Mira Mst',
        role: 'Graphic Design',
        age: 26,
        country: 'Bangladesh',
        salary: 65000,
        star: 4.5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F2415407-60fdcf9d1d768.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005351',
        name: 'Chile Agubuche',
        role: 'Data Entry Expert',
        age: 24,
        country: 'Nigeria',
        salary: 45000,
        star: 2.5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F782495-5f372b4809185.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005352',
        name: 'Shripad P Kalgutkar',
        role: 'Website Developer',
        age: 27,
        country: 'India',
        salary: 95000,
        star: 5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F2413625-6104190cd2441.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005353',
        name: 'Mouaad Ounkhir',
        role: '3d Modeling',
        age: 32,
        country: 'Brazil',
        salary: 77000,
        star: 4,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F2153600-614b75e48e304.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005354',
        name: 'Ramadhan Omar',
        role: 'Article Writer',
        age: 28,
        country: 'Kenya',
        salary: 81000,
        star: 4.5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F2109435-60e99a04b7a7c.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005355',
        name: 'Himanshu Dhameja',
        role: 'Expert Wordpress',
        age: 27,
        country: 'India',
        salary: 83000,
        star: 4.5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F238195-6094dc63c5146.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005356',
        name: 'Gurpreet Singh Maan',
        role: 'Logo Designer',
        age: 33,
        country: 'India',
        salary: 92000,
        star: 5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F719646-6135b3dc3eef5.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005357',
        name: 'Zahid Hasan',
        role: 'Php Programmer',
        age: 27,
        country: 'Bangladesh',
        salary: 99000,
        star: 5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F683596-5cae425f9d7ea.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005358',
        name: 'Gul',
        role: 'Archiect',
        age: 24,
        country: 'Pakistan',
        salary: 69000,
        star: 4,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F589706-5bc35278ccda7.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005359',
        name: 'Ignacio Alejandro lvas',
        role: 'Graphic Design',
        age: 34,
        country: 'Argentina',
        salary: 89000,
        star: 5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F1153990-5e56ae21eea8b.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005360',
        name: 'Tanvir Ahmed',
        role: 'App Developer',
        age: 29,
        country: 'Bangladesh',
        salary: 69000,
        star: 4,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F401729-5d69547025fcb.jpg&w=750&q=75'
    },
    {
        key: 'ksbgos005361',
        name: 'Gellie Ann Canete',
        role: 'Article Writer',
        age: 27,
        country: 'Philippines',
        salary: 59000,
        star: 2.5,
        img: 'https://www.truelancer.com/_next/image?url=https%3A%2F%2Fcdn.truelancer.com%2Fuser-picture%2F1323687-5e58dadbecb3d.jpg&w=750&q=75'
    },
];