  angular.module('myApp', [])
  angular.module('myApp')
  //Question 1
  .controller('MemberCtrl',['$scope',function($scope){
    $scope.members = [
    {name:'Sung Cheul Hong', imageURL:"images/team/sung.jpg",role:"Founder",job:"Groupon: Associate Product Manager",program:"System Design Engineering 2015", email:"sc3hong@uwaterloo.ca", LinkedIn:"https://www.linkedin.com/in/sungcheulhong", description:"Sung has done his first two co-ops at startups for developer positions. He then moved into business roles are BlackBerry and Manulife Financial. For his last two co-op terms, he has worked as an associate product manager where he is working full-time now"},
    
    {name:'Noah Maccalum', imageURL:"images/team/noah.jpg",role:"Co-Founder",job:"Microsoft: Product Manager",program:"Nanotechnology Engineering 2015", email:"noahmacca@gmail.com", LinkedIn:"https://www.linkedin.com/pub/noah-maccallum/31/949/227",
     description:"Noah has done numerous co-ops at established instiutions including MIT and Harvard. He also has written numerous scientific papers. After working at Microsoft as product manager, his interest in tech grew and he is now a full-time product manager at Microsoft"},
    
    {name:'Kartik Talwar', imageURL:"images/team/kartik.jpg",role:"Advisor",program:"4A Physics", email:"", LinkedIn:"https://www.linkedin.com/in/kartiktalwar", description:"Co-Founder of Hack the North and Waterloo API developer as well as various internships in the valley, Kartik is an experienced developer and has track record of getting stuff done"},
    
    {name:'Kaivalya Gandhi', imageURL:"images/team/kaivalya.jpg",role:"Co-President",program:"2B Software Engineering", email:"kaivalya.gandhi@gmail.com", LinkedIn:"https://www.linkedin.com/in/kaivalyagandhi"},
    
    {name:'Helen Huang', imageURL:"images/team/helen.jpg",role:"Co-President",program:"3B Science & Business", email:"helenlyhuang@gmail.com", LinkedIn:"https://ca.linkedin.com/in/helenlyhuang", 
    description:"Aside from my actual responsibilities and club goals in wanting to grow the PVC presence and credibility, I enjoy playing computer games, dancing, and being lazy in general"},
    
    {name:'Sammie Bae', imageURL:"images/team/sammie.jpg",role:"Technology Co-Director",program:"2A System Design Engineering", email:"baesammie@gmail.com", LinkedIn:"https://ca.linkedin.com/in/sammiebae", 
    description:"sammiebae.me"},
    
    {name:'Reginald Suh', imageURL:"images/team/regi.jpg",role:"Technology Co-Director",program:"2A Computer Science", email:"rsuh@uwaterloo.ca", LinkedIn:"https://ca.linkedin.com/in/reginaldsuh"},
    
    {name:'Simran Jassal', imageURL:"images/team/simran.jpg",role:"CO-DIRECTOR OF PRODUCT VISION CHALLENGE & TECH",program:"1B System Design Engineering", email:"simran.jassal@hotmail.com", LinkedIn:"https://ca.linkedin.com/in/simranjassal"},
    
    {name:'Pedja Ristic', imageURL:"images/team/pedja.jpg",role:"MEDIA DIRECTOR",program:"Global Business & Digital Arts", email:"peda.ristic@live.ca", LinkedIn:"https://ca.linkedin.com/in/pedjaristic", 
    description:"A Ballroom dancing tech fiend with a fetish for programming and design. Pedja’s aim is to paint the walls of user interaction with the colour of quality."}
    
    
    ];
    $scope.portfolios = [
      {imageURL:"images/Gallery/1.jpg", header: "Quora", subheader: "Tech Talks", link:"projects/project-1.html"},
      {imageURL:"images/Gallery/2.jpg", header: "Square", subheader: "Tech Talks" ,link:"projects/project-2.html"},
      {imageURL:"images/Gallery/3.jpg", header: "Square", subheader: "Tech Talks" ,link:"projects/project-2.html"},
      {imageURL:"images/Gallery/4.jpg", header: "Mozilla", subheader: "Tech Talks",link:"projects/project-3.html"},
      {imageURL:"images/Gallery/5.jpg", header: "Mozilla", subheader: "Tech Talks",link:"projects/project-3.html"},
      {imageURL:"images/Gallery/6.jpg", header: "PM talk", subheader: "Information Sessions",link:"projects/project-7.html"},
      {imageURL:"images/Gallery/8.jpg", header: "Club Photo", subheader: "Information Sessions",link:"projects/project-7.html"},
      {imageURL:"images/Gallery/13.jpg", header: "Vidyard", subheader: "Innovation Trek",link:"projects/project-8.html"},
      {imageURL:"images/Gallery/11.jpg", header: "Wellframe", subheader: "Tech Talks",link:"projects/project-9.html"},
      {imageURL:"images/Gallery/12.jpg", header: "Wellframe", subheader: "Tech Talks",link:"projects/project-9.html"},
      {imageURL:"images/Gallery/10.jpg", header: "Interview", subheader: "Information Sessions",link:"projects/project-4.html"},
      {imageURL:"images/Gallery/14.jpg", header: "Google", subheader: "Innovation Trek",link:"projects/project-5.html"},
      {imageURL:"images/Gallery/9.jpg", header: "Interview", subheader: "Information Sessions",link:"projects/project-4.html"},
      {imageURL:"images/Gallery/15.jpg", header: "BlackBerry", subheader: "Innovation Trek",link:"projects/project-6.html"},
      {imageURL:"images/Gallery/16.jpg", header: "BlackBerry", subheader: "Innovation Trek",link:"projects/project-6.html"},

    ];

    $scope.portfoliosClass = function (index){
      //console.log($scope.portfolios[index].subheader);

      if($scope.portfolios[index].subheader=="Information Sessions") return "sessions";
      if($scope.portfolios[index].subheader=="Tech Talks") return "talk";
      if($scope.portfolios[index].subheader=="Innovation Trek") return "trek";
      console.log($scope.portfolios[index].subheader);
      
    }
  }]);