export default
    {
      
   
        name :'@BM',
        headerTagline: [//Line 1 For Header
                        'Hi 👋, I am Balaji.',
                        //Line 2 For Header
                        'Full Stack Developer ',
                        //Line 3 For Header
                        'from Minnesota'
    ],
        //Contact Email
        contactEmail:'baredh821@gmail.com',
       
        abouttext: "Hello, my name is Balaji Manoharan. I was born and raised in Chennai - India. I worked in the software Industry for almost 12 years and looking to take a full stack developer career",
        aboutImage:'./profpic.jpg',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
    
       projects:[
           {
            id: 1,
            title:'The Weather Dashboard', 
             service:'UI/UX Design, Branding', 
      
             imageSrc:"https://i.imgur.com/OnK3vmo.png",
          
             url:'https://baredh821.github.io/WeatherDashboard/Index.html'
            },
            {
                id: 2,
                title: 'Progress Insight',
                service: 'Branding, Frontend',
                imageSrc: "https://imgur.com/QJ2iKuf.png",
                url: 'https://bigtunaproj.herokuapp.com/'
            },
            { 
                id: 3,
                title: 'NoteTaker',
                service: 'Web App',
                imageSrc: "https://imgur.com/GoJycXD.png",
                url: 'https://notetakerexpress.herokuapp.com/'
            },
            {
                id: 4,
                title: 'Fitness Tracker',
                service: 'Web App',
                imageSrc: "https://imgur.com/1x7awBU.png",
                url: 'https://workoutappnew.herokuapp.com/'
           }

                    /*

                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
           
            {   name:'Github',
                url:'https://github.com/baredh821'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/balaji-manoharan-420329157/'
            }
           

        ]
    }