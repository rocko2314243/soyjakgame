class GameModel {
    constructor(){
        this.startx = 0
        this.starty = 200
        this.absolutemaxhp = 11  //11
        this.start()
    }
    actualizeStartingPoint(x,y){
        this.startx = x
        this.starty = y
        this.absolutemaxhp = this.soyak.maxhp
    }
    start(){
        this.keypressed = {}
        this.elements = []
        
        this.alreadypressed = {}
        
        let th = this
        
        this.soyak = new Soyak(this.elements,this.startx,this.starty)
        //this.soyak = new Soyak(this.elements,17000,-2600)
        //this.soyak = new Soyak(this.elements,24300,-2450)
        
        this.soyak.hp = this.absolutemaxhp
        this.soyak.maxhp = this.absolutemaxhp


        
        this.elements.push(this.soyak)
        
        
        this.elements.push(new Chud(this.elements,1800,50))
        this.elements.push(new Chud(this.elements,2000,50))
        
        this.elements.push(new Chud(this.elements,2710,50))
        this.elements.push(new Chud(this.elements,2750,50))
        this.elements.push(new Chud(this.elements,2750,250))
        this.elements.push(new Chud(this.elements,2790,50))
        
        
        this.elements.push(new Text(500,100,['nigga',"i'm nuts"]))
        this.elements.push(new BackgroundImage(550,0,'nigga.png',[0,0,100,100]))
        this.elements.push(new Text(0,200,['------->','EAT ZE',"BUGGERINOS",'MMMMM TASTY :Þ','------->']))
        this.elements.push(new Text(-800,200,["no, there's no",'eastereggerino, you','chudoslav','go back and','EAT THE BUGS']))
        this.elements.push(new Text(2000,300,['look at these chuds','I wonder who they',"would be if they didn't",'believe in nazis like glurbmph','and ate soylent at least','6 times a day','','press SPACE to DOWNVOTE THEM!!!!']))
        this.elements.push(new Text(1350,200,['MMMMMMMMMM',"TASTY"]))
        this.elements.push(new Text(2700,200,['sorry for being mean :c',"but in zese uncertain times",'we must kickstart','ze 4th industrial revolution']))
        this.elements.push(new BackgroundImage(2850,0,'szwab.png',[0,0,200,200]))

         this.elements.push(new Soylent(-900,100,2))
		 this.elements.push(new Soylent(-910,100,2))
		 this.elements.push(new Soylent(-920,100,2))
		 this.elements.push(new Soylent(-930,100,2))
		 this.elements.push(new Soylent(-940,100,2))
		 this.elements.push(new Soylent(-950,100,2))
		 this.elements.push(new Soylent(-960,100,2))
		 this.elements.push(new Soylent(-970,100,2))
		 this.elements.push(new Soylent(-980,100,2))
		 this.elements.push(new Soylent(-990,100,2))
		 this.elements.push(new Soylent(-1000,100,2))

		 
        this.elements.push(new Text(3760,250,['↓↓↓GET IN BASEDBOY FOR YOUR↓↓↓','↓↓↓GREAT ADVENTURE!!!!!↓↓↓']))
        this.elements.push(new Rectangle(3700,-3000,15,3150))
        this.elements.push(new Rectangle(3805,-3000,15,3150))
        this.elements.push(new Piperino(3700,-3000,120,3150))      
        
        this.elements.push(new Rectangle(3200,-3200,2400,50))
        this.elements.push(new Rectangle(3200,-3200,50,400))
        this.elements.push(new Rectangle(3200,-2800,500,50))
        
        this.elements.push(new Soylent(3300,-2880))
        this.elements.push(new Soylent(3400,-2880))
        this.elements.push(new Buggerino(3300,-2980,4))
        this.elements.push(new Buggerino(3400,-2980,3))
        
        this.elements.push(new ScienceGuard(this.elements,4200,-3000))
        this.elements.push(new Text(4200,-2900,['WEAR THE FUCKING','MASK OR I','FUCKING KILL YOU','!!!!!!!!!']))
        
        this.elements.push(new Rectangle(5600,-3500,50,300))
        this.elements.push(new Rectangle(5600,-3500,1700,50))
        this.elements.push(new Rectangle(7300,-3500,50,300))
        
        this.elements.push(new Rectangle(6000,-3200,200,50))
        this.elements.push(new Rectangle(6600,-3200,250,50))
        
        this.elements.push(new Text(5700,-2900,['WATCH OUT OR YOU','LAND IN THE','CHUD ZOO']))

        this.elements.push(new Rectangle(7300,-3200,2800,50))
        
        this.elements.push(new Checkpoint(7400,-3150,'chino.png','chino-checkpoint.png',[0,0,150,234],[0,0,99,325],(x,y)=>{th.actualizeStartingPoint(x,y)}))
        this.elements.push(new Text(7600,-3100,['<--- my wife chino']))
        
        this.elements.push(new Buggerino(7600,-3000,4))
        this.elements.push(new Buggerino(7600,-2900,1))
        this.elements.push(new Buggerino(7700,-3000,3))
        this.elements.push(new Buggerino(7700,-2900,3))
        this.elements.push(new Buggerino(7800,-3000,2))
        this.elements.push(new Buggerino(7800,-2900,6))
        this.elements.push(new Buggerino(7900,-3000,6))
        this.elements.push(new Buggerino(7900,-2900,5))
        this.elements.push(new Buggerino(8000,-3000,1))
        this.elements.push(new Buggerino(8000,-2900,4))
        
        this.elements.push(new Buggerino(8200,-3000,4))
        this.elements.push(new Buggerino(8200,-2900,1))
        this.elements.push(new Buggerino(8300,-3000,3))
        this.elements.push(new Soylent(8300,-2900))
        this.elements.push(new Buggerino(8400,-3000,2))
        this.elements.push(new Soylent(8400,-2900))
        this.elements.push(new Buggerino(8500,-3000,6))
        this.elements.push(new Buggerino(8500,-2900,5))
        this.elements.push(new Buggerino(8600,-3000,1))
        this.elements.push(new Buggerino(8600,-2900,4))
        
        this.elements.push(new BackgroundImage(8700,-3150,'enby.png',[0,0,100,200]))
        this.elements.push(new Text(8900,-3000,['HEY!','DO YOU KNOW SOME','MORE EFFECTIVE INSULTS','AGAINS CHUDS?','PRESS I, C or P']))
        
        this.elements.push(new Chud(this.elements,5800,-3400))
        this.elements.push(new Chud(this.elements,6000,-3400))
        this.elements.push(new Chud(this.elements,6200,-3400))
        this.elements.push(new Chud(this.elements,6300,-3400))
        this.elements.push(new Chud(this.elements,6500,-3400))
        this.elements.push(new Chud(this.elements,6700,-3400))
        this.elements.push(new Chud(this.elements,6900,-3400))
        this.elements.push(new Chud(this.elements,7100,-3400))
        
        this.elements.push(new Rectangle(9300,-3150,50,50))
        this.elements.push(new Rectangle(10100,-3250,50,150))
        this.elements.push(new Rectangle(10100,-3300,2000,50))
        this.elements.push(new Rectangle(10700,-3250,50,50))
        this.elements.push(new Rectangle(11300,-3250,50,50))
        this.elements.push(new Rectangle(12100,-3250,150,150))
        this.elements.push(new Rectangle(12200,-3150,50,150))
        this.elements.push(new Rectangle(12200,-3150,150,150))
        this.elements.push(new Rectangle(12300,-3050,250,150))
        this.elements.push(new Rectangle(12300,-3100,1500,100))
        this.elements.push(new Rectangle(13800,-3100,1000,300))
        this.elements.push(new Rectangle(14830,-2750,600,50))
        this.elements.push(new Rectangle(14800,-2900,3000,50))
        this.elements.push(new Rectangle(15500,-2900,3300,200))
        
        this.elements.push(new Rectangle(17800,-4300,1000,200))
        this.elements.push(new Rectangle(17800,-4100,50,1200))        
        
        this.elements.push(new ScienceGuard(this.elements,18400,-4000,undefined,true))
        this.elements.push(new Text(18100,-3900,['IF YOU WEAR','A MASK','PRESS K TO','KILL YOURSELF']))

        this.elements.push(new Soylent(18700,-3200,2))

        
        this.elements.push(new Soylent(18700,-3200,2))
        this.elements.push(new Soylent(18700,-3400,2))
        this.elements.push(new Soylent(18700,-3600,2))
        this.elements.push(new Soylent(18700,-3800,2))

        this.elements.push(new Buggerino(18875,-2975,4))
        this.elements.push(new Rectangle(18850,-3050,50,50))
        this.elements.push(new Buggerino(18975,-2775,3))
        this.elements.push(new Rectangle(18950,-2850,50,50))


        this.elements.push(new Rectangle(18800,-4200,800,1000))
        this.elements.push(new Rectangle(19600,-3800,7000,400))
        
        this.elements.push(new BackgroundImage(19150,-3200,'kwiatek.png',[0,0,75,130]))

        this.elements.push(new BackgroundImage(20000,-3400,'nigga.png',[0,0,120,120]))
        this.elements.push(new Text(20100,-3250,['NIGGA','NUTS']))
        this.elements.push(new BackgroundImage(20400,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(20800,-3400,'szwabska-wiewiurka.png',[0,0,200,200]))
        this.elements.push(new Text(21130,-3150,['EAT ZE NUTS','OR I RAPE UR BUZZY','OWO UWU','I AM ZE BYUTIFUL','SKVIREL RIGHT NOW','EVERYBODY VILL BE A','FURRY AFTER ZE','5TH INDUSTRIAL',' REVOLUTION']))
        
        
        this.elements.push(new BackgroundImage(21800,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(21950,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(22100,-3400,'spooky-tree.png',[0,0,100,220]))
        
        this.elements.push(new BackgroundImage(22700,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(22850,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(23000,-3400,'spooky-tree.png',[0,0,100,220]))
        
        this.elements.push(new BackgroundImage(23350,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(23500,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(23650,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(23800,-3400,'spooky-tree.png',[0,0,100,220]))
        

        this.elements.push(new Fingerboy(this.elements,22100,-3250))
        this.elements.push(new Fingerboy(this.elements,22300,-3250))
        this.elements.push(new Fingerboy(this.elements,22500,-3250))
        
        this.elements.push(new Fingerboy(this.elements,23300,-3250))
        this.elements.push(new Fingerboy(this.elements,23600,-3250))

        this.elements.push(new Rectangle(24250,-3350,50,50))
        this.elements.push(new ScienceGuard(this.elements,24500,-3250))
        
        this.elements.push(new Soylent(23700,-3150,2))
        this.elements.push(new Soylent(23800,-3150,2))
        this.elements.push(new Soylent(24000,-3150,2))
        this.elements.push(new Soylent(24100,-3100,2))
        
        this.elements.push(new Soylent(25500,-3100,2))
        this.elements.push(new Soylent(25600,-3100))
        this.elements.push(new Buggerino(25500,-3200,5))
        this.elements.push(new Soylent(25600,-3200))
        
        this.elements.push(new BackgroundImage(25350,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(25500,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(25650,-3400,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(25800,-3400,'spooky-tree.png',[0,0,100,220]))
        
        this.elements.push(new Rectangle(26600,-3650,1000,400))
        this.elements.push(new Rectangle(27600,-3500,1000,400))
        this.elements.push(new Rectangle(28600,-3350,1000,400))
        this.elements.push(new Rectangle(29600,-3350,1000,1500))
        
        
        this.elements.push(new BackgroundImage(27050,-3250,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(27100,-3250,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(27250,-3250,'spooky-tree.png',[0,0,100,220]))

        this.elements.push(new BackgroundImage(28050,-3100,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(28100,-3100,'spooky-tree.png',[0,0,100,220]))
        this.elements.push(new BackgroundImage(28250,-3100,'spooky-tree.png',[0,0,100,220]))

        this.elements.push(new Fingerboy(this.elements,25500,-3100))
        this.elements.push(new Fingerboy(this.elements,25600,-3100))
        this.elements.push(new Fingerboy(this.elements,25700,-3100))
        
        this.elements.push(new Fingerboy(this.elements,27500,-3100))
        this.elements.push(new Fingerboy(this.elements,27600,-3100))
        this.elements.push(new Fingerboy(this.elements,27700,-3100))
        this.elements.push(new Fingerboy(this.elements,27800,-3100))
        
        this.elements.push(new Thoughjak(this.elements,28800,-2900))
        this.elements.push(new Thoughjak(this.elements,28900,-2900))
        this.elements.push(new Thoughjak(this.elements,29000,-2900))
		this.elements.push(new Text(29000,-1900,['Is there anything to this game?']))

        this.elements.push(new AttacksYou(this.elements,25550,-2950))
        
        

        this.elements.push(new Soylent(19400,-2900))
        this.elements.push(new Soylent(19500,-2900))

        this.elements.push(new Buggerino(19400,-3000,1))
        this.elements.push(new Buggerino(19500,-3000,2))
        this.elements.push(new Buggerino(19600,-3000,5))

        
        
        
        this.elements.push(new BackgroundImage(15900,-2700,'kwiatek.png',[0,0,75,130]))
        this.elements.push(new BackgroundImage(15970,-2700,'grzyb.png',[0,0,100,100]))
        this.elements.push(new BackgroundImage(16070,-2700,'nigga.png',[0,0,120,120]))
        
        this.elements.push(new BackgroundImage(15970,-2700,'grzyb.png',[0,0,100,100]))
        
        this.elements.push(new BackgroundImage(16400,-2700,'grzyb.png',[0,0,100,100]))
        this.elements.push(new BackgroundImage(16500,-2700,'grzyb.png',[0,0,120,170]))
        this.elements.push(new BackgroundImage(16600,-2700,'grzyb.png',[0,0,100,100]))
        
        
        
        this.elements.push(new Text(16200,-2500,['TIME TO REST AND ENJOY','SOME TIME WITH NATURE ^_^']))

        this.elements.push(new Soylent(16500,-2450,2))
        this.elements.push(new Soylent(16600,-2450,2))
        this.elements.push(new Soylent(16700,-2450,2))
        
        this.elements.push(new HeartyPerson(17200,-2700,22))
        this.elements.push(new Text(17050,-2450,['I SEE YOU HAVE','RECEIVED SO MUCH HATE','FROM CHUDS AND OTHER','FREAKERINOS','','HAVE SOME VERY','WHOLESOME GIFT FROM','YOUR FRIEND']))
        this.elements.push(new BackgroundImage(17550,-2700,'poniak.png',[0,0,160,160]))
        this.elements.push(new Text(17450,-2550,['REMEMBER!','FRIENDSHIP','IS MAGIC!']))
        
        this.elements.push(new Text(18600,-2500,['BEWARE OF FINGERBOYS','SAD TRUTH:',"YOU CAN'T INSULT THEM",'THEY JUMP','AND ARE SCARY','AND SPOOKY']))
        
        this.elements.push(new Checkpoint(18000,-2700,'chika.png','chika-checkpoint.png',[0,0,104,141],[0,0,98,225],(x,y)=>{th.actualizeStartingPoint(x,y)}))
        this.elements.push(new Text(18250,-2650,['<--- not my wife chika','but even nice']))
        

        
        this.elements.push(new Soylent(12900,-2700))
        this.elements.push(new Buggerino(13000,-2700,1))
        this.elements.push(new Soylent(13100,-2700))
        this.elements.push(new Buggerino(12800,-2800,1))
        this.elements.push(new Buggerino(12900,-2800,4))
        this.elements.push(new Buggerino(13000,-2800,2))
        this.elements.push(new Buggerino(13100,-2800,5))
        this.elements.push(new Buggerino(13200,-2800,5))
        
        
        this.elements.push(new Buggerino(13400,-2700,3))
        this.elements.push(new Buggerino(13500,-2700,3))
        this.elements.push(new Buggerino(13600,-2700,2))
        this.elements.push(new Buggerino(13700,-2700,1))
        this.elements.push(new Buggerino(13800,-2700,4))
        
        this.elements.push(new Soylent(14700,-2600))
        this.elements.push(new Soylent(14800,-2600))
        this.elements.push(new Soylent(14900,-2600))
        
        
        this.elements.push(new Chud(this.elements,9500,-3000))
        this.elements.push(new SerialShooter(this.elements,9600,-3000))
        this.elements.push(new Chud(this.elements,10500,-3200))
        this.elements.push(new Chud(this.elements,10600,-3200))
        this.elements.push(new SerialShooter(this.elements,11000,-3200))
        this.elements.push(new Chud(this.elements,11100,-3200))
        
        this.elements.push(new Thoughjak(this.elements,12300,-2900,{left:12300,right:13800}))
        this.elements.push(new Thoughjak(this.elements,12400,-2900,{left:12300,right:13800}))
        this.elements.push(new Thoughjak(this.elements,12500,-2900,{left:12300,right:13800}))
        this.elements.push(new Thoughjak(this.elements,12600,-2900,{left:12300,right:13800}))
        this.elements.push(new Thoughjak(this.elements,12700,-2900,{left:12300,right:13800}))
        
        this.elements.push(new Text(13000,-2870,['BRUTAL REDPILL:','NOT EVERYONE IS OFFENDED','BY THESE TRANNY INSULTS,','THOUGH']))
        
        
        this.elements.push(new Thoughjak(this.elements,14500,-2800,{left:13800,right:14600}))
        this.elements.push(new Thoughjak(this.elements,14600,-2800,{left:13800,right:14600}))
        this.elements.push(new Thoughjak(this.elements,14700,-2800,{left:13800,right:14600}))
        
        
        this.elements.push(new Rectangle(15550,-2700,30,30))
        this.elements.push(new SerialShooter(this.elements,15600,-2700))
        this.elements.push(new Rectangle(15650,-2700,30,30))
        
        //this.elements.push(new Text(14600,-2800,['OK DIN DO','ANY MORE ZINGS','IN ZIS GAME :0']))
        
        //borderinos
        this.elements.push(new Rectangle(-1000,-100,4700,100))
		this.elements.push(new Rectangle(-1400,-100,1000,100))
        this.elements.push(new Rectangle(3820,-100,1180,100))
       // this.elements.push(new Rectangle(-1500,-500,500,1000))
        this.elements.push(new Rectangle(4000,-500,500,1000))
        
        this.elements.push(new Rectangle(200,0,150,100))
        this.elements.push(new Rectangle(500,200,300,40))
        this.elements.push(new Rectangle(900,0,150,100))
        this.elements.push(new Rectangle(1600,0,150,150))
        this.elements.push(new Rectangle(2300,0,150,100))
        
        this.elements.push(new Rectangle(1000,400,150,40))
        this.elements.push(new Buggerino(1075,490,6))
        this.elements.push(new Rectangle(1200,600,150,40))
        this.elements.push(new Buggerino(1275,690,6))
        this.elements.push(new Rectangle(1000,800,150,40))
        this.elements.push(new Soylent(1075,890))
        this.elements.push(new Rectangle(700,1000,150,40))
        this.elements.push(new Buggerino(775,1090,5))
        this.elements.push(new Rectangle(500,1200,150,40))
        this.elements.push(new Soylent(575,1290))
        this.elements.push(new Rectangle(700,1400,150,40))
        this.elements.push(new Mask(775,1490))
        this.elements.push(new Text(500,1490,['You forgot something, sir']))
        
        
        this.elements.push(new Soylent(300,400))
        this.elements.push(new Soylent(1300,300))
        this.elements.push(new Soylent(1400,300))
        this.elements.push(new Buggerino(300,200,1))
        this.elements.push(new Buggerino(200,200,4))
        this.elements.push(new Buggerino(400,400,2))
        this.elements.push(new Buggerino(500,400,5))
        this.elements.push(new Buggerino(600,400,5))
        
        
        this.elements.push(new Buggerino(-300,200,3))
        this.elements.push(new Buggerino(-200,200,3))
        this.elements.push(new Buggerino(-500,200,2))
        this.elements.push(new Buggerino(-600,200,2))
        
        this.elements.push(new Buggerino(1800,100,1))
        this.elements.push(new Buggerino(1900,100,3))
        this.elements.push(new Buggerino(2000,100,1))
        
        this.elements.push(new Buggerino(1200,100,5))
        this.elements.push(new Buggerino(1300,100,3))
        this.elements.push(new Buggerino(1400,100,3))
        this.elements.push(new Buggerino(1500,100,4))
        
        this.elements.push(new Buggerino(2800,200,4))
        this.elements.push(new Buggerino(2900,200,1))
        this.elements.push(new Buggerino(3000,200,5))
        this.elements.push(new Buggerino(2800,300,3))
        this.elements.push(new Buggerino(2900,300,3))
        this.elements.push(new Buggerino(3000,300,2))
        
        
        //platformerinos
        this.elements.push(new Rectangle(28000,-2800,400,50))
        this.elements.push(new Buggerino(28100,-2650,1))
        this.elements.push(new Buggerino(28200,-2650,2))
        this.elements.push(new Buggerino(28300,-2650,4))
        
        this.elements.push(new Rectangle(26800,-2750,850,50))
        this.elements.push(new Buggerino(26900,-2600,2))
        this.elements.push(new Buggerino(27000,-2600,2))
        this.elements.push(new Buggerino(27100,-2600,3))
        this.elements.push(new Buggerino(27300,-2600,5))
        this.elements.push(new Buggerino(27400,-2600,5))
        
        this.elements.push(new Rectangle(26200,-2700,400,50))
        this.elements.push(new Buggerino(26300,-2550,1))
        this.elements.push(new Buggerino(26400,-2550,5))
        this.elements.push(new Buggerino(26500,-2550,5))
        
        this.elements.push(new Text(26400,-2400,['INB4 SOMETHING ATTACKS YOU','AGAIN FROM ABOVE','REMEMBER YOU CAN CALL','HER INCEL']))

        this.elements.push(new Rectangle(25200,-2700,800,50))
        this.elements.push(new AttacksYou(this.elements,25200,-2550,null,true))
        
        this.elements.push(new Rectangle(23200,-2600,1800,150))
        
        this.elements.push(new Buggerino(24550,-2350,2))
        this.elements.push(new Buggerino(24600,-2350,2))
        this.elements.push(new Buggerino(24650,-2350,2))
        
        this.elements.push(new Buggerino(24500,-2300,2))
        this.elements.push(new Buggerino(24550,-2250,2))
        this.elements.push(new Soylent(24600,-2200,2))
        this.elements.push(new Buggerino(24650,-2150,2))    
        this.elements.push(new Buggerino(24700,-2100,2))
        
        this.elements.push(new Buggerino(24700,-2300,2))
        this.elements.push(new Buggerino(24650,-2250,2))
        this.elements.push(new Buggerino(24550,-2150,2))
        this.elements.push(new Buggerino(24500,-2100,2))
        
        this.elements.push(new Soylent(24500,-2350,2))
        this.elements.push(new Soylent(24700,-2350,2))
        
        this.elements.push(new Checkpoint(24300,-2450,'soylita-checkpoint.png','soylita.png',[0,0,130,220],[0,0,130,220],(x,y)=>{th.actualizeStartingPoint(x,y)}))
        
        this.elements.push(new BackgroundImage(23550,-2450,'kwiatek.png',[0,0,75,130]))
        this.elements.push(new BackgroundImage(23650,-2450,'kwiatek.png',[0,0,75,130]))
        this.elements.push(new BackgroundImage(23750,-2450,'kwiatek.png',[0,0,75,130]))
        
        
        this.elements.push(new Buggerino(23560,-2250,1))
        this.elements.push(new Buggerino(23600,-2250,2))
        this.elements.push(new Buggerino(23650,-2250,3))
        this.elements.push(new Buggerino(23700,-2250,4))
        this.elements.push(new Buggerino(23750,-2250,5))
        this.elements.push(new Buggerino(23800,-2250,6))
        
        this.elements.push(new Buggerino(23560,-2200,2))
        this.elements.push(new Buggerino(23600,-2200,3))
        this.elements.push(new Buggerino(23650,-2200,4))
        this.elements.push(new Buggerino(23700,-2200,5))
        this.elements.push(new Buggerino(23750,-2200,6))
        this.elements.push(new Buggerino(23800,-2200,1))
        
        this.elements.push(new Buggerino(23560,-2150,3))
        this.elements.push(new Buggerino(23600,-2150,4))
        this.elements.push(new Buggerino(23650,-2150,5))
        this.elements.push(new Buggerino(23700,-2150,6))
        this.elements.push(new Buggerino(23750,-2150,1))
        this.elements.push(new Buggerino(23800,-2150,2))
        
        this.elements.push(new BackgroundImage(23850,-2450,'grzyb.png',[0,0,100,100]))
        this.elements.push(new BackgroundImage(23900,-2450,'grzyb.png',[0,0,100,100]))
        this.elements.push(new BackgroundImage(23950,-2450,'grzyb.png',[0,0,100,100]))
        
        this.elements.push(new Text(24100,-2150,['NOW HAVE A GOOD REST ON','THIS MEADOW KUZ','BOSS IS INCOMING',"IT'S A REALY REALLY","REALLY (sic!) SPECIAL CASE"]))


        this.elements.push(new BackgroundImage(24050,-2450,'kwiatek.png',[0,0,75,130]))
        this.elements.push(new BackgroundImage(24150,-2450,'grzyb.png',[0,0,100,100]))
        
        this.elements.push(new BackgroundImage(24740,-2450,'kwiatek.png',[0,0,75,130]))

        
        this.elements.push(new Rectangle(22700,-2600,250,100))
        this.elements.push(new Rectangle(22200,-2600,250,100))
        this.elements.push(new Rectangle(21700,-2600,250,100))

        this.staircase(20650,-2550,10)
        this.staircase(19650,-1550,10)
        
        this.elements.push(new Rectangle(18950,-2200,2300,150))
        this.elements.push(new Rectangle(18850,-2200,100,1300))
        this.elements.push(new Rectangle(16950,-900,2000,50))
        this.elements.push(new Rectangle(16950,-500,2450,50))
        
        this.elements.push(new LockedRectangle(18850,-850,100,350,"1",this.soyak))
        this.elements.push(new LockedRectangle(18250,-850,100,350,"2",this.soyak))
        this.elements.push(new BackgroundImage(18050,-850,'sojberg.png',[0,0,200,200]))
        
        this.elements.push(new Meds(this.elements,18500,-800))
        this.elements.push(new Meds(this.elements,18500,-850))
        this.elements.push(new Meds(this.elements,18650,-800))
        this.elements.push(new Meds(this.elements,18650,-850))
        
        this.elements.push(new Text(18600,-1000,["I SUPPOSE THAT YOU DIDN'T LISTEN","TO THIS POOR MISGUIDED FOOL!?","","WAKE THE SCHIZO","NOW!!"]))

        
        this.elements.push(new Text(17950,-650,["YOU HAVE TO GIVE","MEDS TO THIS INSANE","RETARD DOWN BELOW","NO, I WON'T DO IT","MYSELF BECAUSE","I'M TOO SCARED"]))
        this.elements.push(new Text(16950,-650,["OK, I DIDN'T MAKE MORE,","I'M SUPRISED THAT I HAVE ALREADY"," MADE A BOSS","NEXT I WILL MAKE A SCHIZO WARD.","YOU CAN JUMP AND CHECK WHAT IS BELOW"]))
        
        this.elements.push(new Rectangle(20350,-2050,100,500))
        
        this.elements.push(new BackgroundImage(19180,-720,'racist-puncher.png',[0,0,200,200]))
        
        this.elements.push(new Rectangle(19400,-800,50,1700))
        
        this.elements.push(new Rectangle(19000,-1900,100,50))
        this.elements.push(new Rectangle(19050,-1700,100,50))
        this.elements.push(new Rectangle(19000,-1500,100,50))
        this.elements.push(new Rectangle(19050,-1300,100,50))
        this.elements.push(new Rectangle(19000,-1100,100,50))

        this.elements.push(new Joooos(this.elements,20050,-1900,{left:19050,right:20050}))
        this.elements.push(new Key(20250,-1900,"1"))
        this.elements.push(new Soybro(this.elements,19700,-1900))
        this.elements.push(new Soylent(19500,-1800,2))
        this.elements.push(new Soylent(19500,-1650,2))
        
        this.elements.push(new Text(19800,-1750,["DON'T.",'TOUCH.','THIS.','SCHIZO.','','EVEN DOUGH HE','TOOK THE KEY TO','THE EXIT']))
    }
    staircase(x,y){
        this.elements.push(new Rectangle(x,y-50,50,1000))
        this.elements.push(new Rectangle(x,y-50,1000,50))
        this.elements.push(new Rectangle(x,y,950,50))
        this.elements.push(new Rectangle(x,y+50,900,50))
        this.elements.push(new Rectangle(x,y+100,850,50))
        this.elements.push(new Rectangle(x,y+150,800,50))
        this.elements.push(new Rectangle(x,y+200,750,50))
        this.elements.push(new Rectangle(x,y+250,700,50))
        this.elements.push(new Rectangle(x,y+300,650,50))
        this.elements.push(new Rectangle(x,y+350,600,50))
        this.elements.push(new Rectangle(x,y+400,550,50))
        this.elements.push(new Rectangle(x,y+450,500,50))
        this.elements.push(new Rectangle(x,y+500,450,50))
        this.elements.push(new Rectangle(x,y+550,400,50))
        this.elements.push(new Rectangle(x,y+600,350,50))
        this.elements.push(new Rectangle(x,y+650,300,50))
        this.elements.push(new Rectangle(x,y+700,250,50))
        this.elements.push(new Rectangle(x,y+750,200,50))
        this.elements.push(new Rectangle(x,y+800,150,50))
        this.elements.push(new Rectangle(x,y+850,100,50))
    }
    addCanvas(canvas){
        this.canvas = canvas
        let t = this
        this.cam = this.canvas.camera
        this.run()
    }
    run(){
        for(var i in this.elements){
            if(this.canvas.checkIfThingInCamera(this.elements[i],2))
                this.elements[i].move()
        }
        for(var i in this.elements){
            if(this.elements[i].remove)
                this.elements.splice(i,1)// = this.elements.filter(x=>x.remove != true)
        }
        for(var i in this.elements){
            if(this.elements[i].active)
                this.elements[i].resetCollisions()
        }
        this.checkCollisions()
        this.checkSeeings()
        this.steer()
        this.moveCanvas()
        
        let t = this
        setTimeout(
                function(e){
                    t.run()
                    t.canvas.camera.setX(t.soyak.x)
                    t.canvas.camera.setY(t.soyak.y)
                    t.canvas.draw()
                }
                ,35)
        
    }
    checkCollisions(){
        var mobs = this.elements.filter(x=>x.active && this.canvas.checkIfThingInCamera(x,4))
        
        for(var i in mobs){
            var m = mobs[i]
            for(var j in this.elements){
                var e = this.elements[j]
                
                
                if(!m.active && !e.crashable)
                    continue
                if(!m.touchable && e.touchable)
                    continue
                if(i == j)
                    continue
                var mb = m.getBounds()
                var eb = e.getBounds()
                if(mb[2]+m.x-10 > eb[0]+e.x+10 && mb[0]+m.x+10 < eb[2]+e.x-10){
                    if(mb[3]+m.y > eb[1]+e.y && mb[3]+mb[1]+m.y*2 < eb[3]+eb[1]+e.y*2 && m.vy > e.vy){
                        if(e.touchable){
                            e.notifyCollision('down',m)
                            m.notifyCollision('up',e)
                            var diff = Math.min(mb[3]+m.y - eb[1]-e.y,20)
                            if(e.solid){
                                m.y -= diff
                            } else {
                                m.y -= diff/2
                                e.y += diff/2
                            }
                        } else {
                            m.tryTake(e)
                        }
                    }
                    if(mb[1]+m.y < eb[3]+e.y && mb[3]+mb[1]+m.y*2 > eb[3]+eb[1]+e.y*2 && m.vy < e.vy){
                        if(e.touchable){
                            m.notifyCollision('down',e)
                            e.notifyCollision('up',m)
                            var diff = Math.min(mb[1]+m.y - eb[3]-e.y,20)
                            if(e.solid){
                                m.y -= diff
                            } else {
                                m.y -= diff/2
                                e.y += diff/2
                            }
                        } else {
                            m.tryTake(e)
                        }
                    }
                }
                if(mb[3]+m.y-10 > eb[1]+e.y+10 && mb[1]+m.y+10 < eb[3]+e.y-10){
                    if(mb[2]+m.x > eb[0]+e.x && mb[2]+mb[0]+m.x*2 < eb[2]+eb[0]+e.x*2 && m.vx > e.vx){
                        if(e.touchable){
                            e.notifyCollision('right',m)
                            m.notifyCollision('left',e)
                            var diff = Math.min(mb[2]+m.x - eb[0]-e.x,20)
                            if(e.solid){
                                m.x -= diff
                            } else {
                                m.x -= diff/2
                                e.x += diff/2
                            }
                        } else {
                            m.tryTake(e)
                        }
                    }
                    if(mb[0]+m.x < eb[2]+e.x && mb[2]+mb[0]+m.x*2 > eb[2]+eb[0]+e.x*2 && m.vx < e.vx){
                        if(e.touchable){
                            m.notifyCollision('right',e)
                            e.notifyCollision('left',m)
                            var diff = Math.min(mb[0]+m.x - eb[2]-e.x,20)
                            if(e.solid){
                                m.x -= diff
                            } else {
                                m.x -= diff/2
                                e.x += diff/2
                            }
                        } else {
                            m.tryTake(e)
                        }
                    }
                }
            }
        }
        
    }
    checkSeeings(){
        var mobs = this.elements//.filter(x=>x.active)
        const MOB_SEEING_HORIZONTAL = 400
        const MOB_SEEING_VERTICAL = 400
        
        for(var i in mobs){
            var m = mobs[i]
            if(!m.active || m.dead)
                continue
            for(var j in this.elements){
                var e = this.elements[j]
                
                if(!e.active)
                    continue
                if(i == j)
                    continue
                    
                if(Math.abs(m.x-e.x) < MOB_SEEING_HORIZONTAL && Math.abs(m.y-e.y) < MOB_SEEING_VERTICAL){
                    e.trySee(m)
                    m.trySee(e)
                } else {
                    if(e.triggered == m)
                        e.triggered = null
                    if(m.triggered == e)
                        m.triggered = null
                }
            }
        }
        for(var i in mobs){
            mobs[i].see = mobs[i].newsee
            mobs[i].newsee = []
        }
    }
    steer(){
        if(this.soyak.dead){
            if(this.keypressed["r"]){
                this.start()
            }
            return
        }
        if(this.keypressed["ArrowLeft"] ^ this.keypressed["ArrowRight"] != true){
            this.soyak.moving = 0
        } else {
            if(this.keypressed["ArrowLeft"] == true){
                this.soyak.moving = -10 //10
            }
            if(this.keypressed["ArrowRight"] == true){
                this.soyak.moving = 10
            }
        }
        if(this.keypressed["ArrowUp"] == true){
            this.soyak.tryJump()
        }
        if(this.keypressed[" "] == true && this.soyak.throwing == 0){
            this.alreadypressed[" "] = true
            this.soyak.prepareToThrow("downvote",this.elements)
        }
        if(this.keypressed[" "] != true && this.alreadypressed[" "] == true && this.soyak.throwing == 1){
            delete this.alreadypressed[" "]
            this.soyak.throw()
        }
        
        if(this.keypressed["k"] == true && !this.alreadypressed["k"]){
            this.alreadypressed["k"] = true
            this.soyak.kys()
        }
        if(this.keypressed["k"] != true && this.alreadypressed["k"]){
            this.alreadypressed["k"] = false
        }
        
        if(this.keypressed["i"] == true && this.soyak.throwing == 0){
            this.alreadypressed["i"] = true
            this.soyak.prepareToThrow("incelphobicslur",this.elements)
        }
        if(this.keypressed["i"] != true && this.alreadypressed["i"] == true && this.soyak.throwing == 1){
            delete this.alreadypressed["i"]
            this.soyak.throw()
        }
        
        if(this.keypressed["c"] == true && this.soyak.throwing == 0){
            this.alreadypressed["c"] = true
            this.soyak.prepareToThrow("chudphobicslur",this.elements) //chudphobicslur
        }
		
        if(this.keypressed["c"] != true && this.alreadypressed["c"] == true && this.soyak.throwing == 1){
            delete this.alreadypressed["c"]
            this.soyak.throw()
        }
		
        if(this.keypressed["s"] == true && this.soyak.throwing == 0){
            this.alreadypressed["s"] = true
            this.soyak.prepareToThrow("shoot",this.elements) //chudphobicslur
        }
		
        if(this.keypressed["s"] != true && this.alreadypressed["s"] == true && this.soyak.throwing == 1){
            delete this.alreadypressed["s"]
            this.soyak.throw()
        }
        if(this.keypressed["p"] == true && this.soyak.throwing == 0){
            this.alreadypressed["p"] = true
            this.soyak.prepareToThrow("pissbabyphobicslur",this.elements)
        }
        if(this.keypressed["p"] != true && this.alreadypressed["p"] == true && this.soyak.throwing == 1){
            delete this.alreadypressed["p"]
            this.soyak.throw()
        }
    }
    moveCanvas(){
        var x = this.cam.getX()
        var y = this.cam.getY()
    }
    keydown(e){
        this.keypressed[e.key] = true
    }
    keyup(e){
        delete this.keypressed[e.key]
    }
    thremboize(number){
        return Number(number).toString(11).replaceAll('7','Ϫ').replaceAll('8','7').replaceAll('9','8').replaceAll('a','9')
    }
    drawPanel(context){
        context.fillStyle = "#000"
        context.textAlign = "left"
        context.font = "18px Verdana"
        context.strokeStyle = "#000"
        context.lineWidth = 2
        
        context.fillText("Mental health points: "+this.thremboize(this.soyak.hp)+"/"+this.thremboize(this.soyak.maxhp),10,20)
        context.fillText("Soy power: "+this.thremboize(this.soyak.soypoints),10,40)
        
        if(this.soyak.dead){
            context.fillStyle = "#0008"
            
            var w = this.canvas.bounds.width, h = this.canvas.bounds.height
            context.fillRect(w/6,h/6,w*2/3,h*2/3)
            
            context.fillStyle = "#fff"
            context.textAlign = "center"
            context.font = "36px Verdana"
            context.fillText("WHOA. YOU. DIED.",w/2,h/4)
            
            context.font = "20px Verdana"
            context.fillText("You were killed by:",w/2,h*4/12)
            context.font = "30px Verdana"
            context.fillText(this.soyak.lasthit.name,w/2,h*11/24)
            context.font = "16px Verdana"
            for(var i in this.soyak.lasthit.message){
                var line = this.soyak.lasthit.message[i]
                context.fillText(line,w/2,h*13/24+i*h/24)
            }
            if(this.soyak.lasthit.sonawidth != undefined)
                context.drawImage(this.canvas.images[this.soyak.lasthit.sona],w*8/12,h*8/24,h/6*this.soyak.lasthit.sonawidth,h/6)
            else
                context.drawImage(this.canvas.images[this.soyak.lasthit.sona],w*8/12,h*8/24,h/12,h/6)
                context.font = "17px Verdana"
            context.fillText("PRO TIP: Press keys I, C, P or S for more EFFECTIVE INSULTS.",w/2,h*3/3.7)
			context.fillText("ANOTHER PRO TIP: find eastereggerinos to progress the gamerino.",w/2,h*3/3.5)

            context.font = "18px Verdana"
            context.fillText("Press R to restart the game",w/2,h*3/4)

        }
    }
}
class Thing {
    constructor(x,y){
        this.x = x
        this.y = y
        this.vx = 0
        this.vy = 0
        this.cached = null
        this.lastCollisions = {'left':0,'up':0,'right':0,'down':0}
        this.touchable = false
        this.crashable = false
    }
    resetCollisions(){
        this.lastCollisions['left'] = this.lastCollisions['left'] > 1 ? this.lastCollisions['left']-1 : 0
        this.lastCollisions['right'] = this.lastCollisions['right'] > 1 ? this.lastCollisions['right']-1 : 0
        this.lastCollisions['up'] = this.lastCollisions['up'] > 1 ? this.lastCollisions['up']-1 : 0
        this.lastCollisions['down'] = this.lastCollisions['down'] > 1 ? this.lastCollisions['down']-1 : 0
    }
    move(){
        this.x += this.vx
        this.y += this.vy
    }
    notifyCollision(direction,colliding){
        this.lastCollisions[direction] = 2
    }
    tryTake(thing){
        if(thing.taken)
            return
    }
    getBounds(){
        return this.bounds
    }
}
class Mob extends Thing {
    constructor(elementArray,x,y,gobounds){
        super(x,y)
        this.elementArray = elementArray
        this.solid = false
        this.active = true
        this.friction = 0.3
        this.maxAirSpeed = 15
        
        this.gobounds = gobounds
        this.touchable = true
        
        this.maxhp = 3
        this.hp = 3
        this.dead = false
        this.deading = 3
        
        this.newsee = []
        this.see = []
        
        this.lasthit = null
        this.lastricochet = null
        
        this.triggered = null
        
        this.politicalposition = null
    }
    tryTake(thing){
        if(this == thing.owner)
            return
        if(thing.taken)
            return
    }
    takeHit(thing,hptaken,speed){
        if(speed == undefined)
            speed = 1
        this.hp -= hptaken
        this.vx += thing.vx/2*speed
        this.vy += 5*speed
        thing.taken = true
        
        if(this.hp > 0){
            this.lasthit = thing.owner
        }
    }
    takeHitFromMob(mob,hptaken){
        var firstHp = this.hp
        this.hp -= hptaken
        
        if(firstHp > 0){
            this.lasthit = mob
        }
    }
    trySee(someone){
        if(this.seen(someone)){
            this.newsee.push(someone)
        }
    }
    seen(someone){
        return false
    }
    loot(){
        
    }
    move(){
        super.move()
        this.vy -= 1
        if(this.vy < -this.maxAirSpeed)
            this.vy = -this.maxAirSpeed
            
        if(this.hp <= 0 && !this.dead){
            this.hp = 0
            this.dead = true
            this.loot()
            this.cached = null
        }
        if(this.deading > 0){
            this.deading--
            this.cached = null
        }
        
        var oktrigger = false
        
        for(var i in this.newsee){
            if(this.triggered == this.newsee[i]){
                oktrigger = true;break
            }
        }
    }
    notifyCollision(direction,colliding){
        super.notifyCollision(direction)
        switch(direction){
            case "down":
                if(this.vy < 0)
                    this.vy = -this.vy*this.friction
                break
            case "up":
                if(this.vy > 0)
                    this.vy = -this.vy*this.friction
                break
            case "right":
                if(this.vx < 0)
                    this.vx = -this.vx*this.friction
                break
            case "left":
                if(this.vx > 0)
                    this.vx = -this.vx*this.friction
                break
        }
        if(Math.abs(this.vx) < -0.1)
            this.vx = 0
        if(Math.abs(this.vy) < -0.1)
            this.vy = 0
    }
}
class Walker extends Mob {
    constructor(elementArray,x,y,gobounds){
        super(elementArray,x,y,gobounds)
        this.moving = 0
        this.friction = 0.1
        this.maxAirSpeed = 15
        this.throwing = 0
        this.deading = 5
        this.throwingObject = null   
        this.sideLeft = true
    }
    
    move(){
        super.move()
            
            
        var previousSL = this.sideLeft
        if(this.moving < 0)
            this.sideLeft = true
        else if(this.moving > 0)
            this.sideLeft = false
        if(this.sideLeft != previousSL)
            this.cached = null
            
        if(this.vx > this.moving){
            this.vx -= 1
        }
        if(this.vx < this.moving){
            this.vx += 1
        }
        if(this.moving == 0 && this.vx > -1 && this.vx < 1)
            this.vx = 0
            
        if(this.dead){
            this.moving = 0
            return
        }
        
        this.rememberBounds()
        
    }
    rememberBounds(){
        if(this.gobounds && this.x < this.gobounds.left && this.moving < 0)
            this.moving = 0
        if(this.gobounds && this.x > this.gobounds.right && this.moving > 0)
            this.moving = 0
    }
    tryTake(thing){
        super.tryTake(thing)
        if(thing.owner == this)
            return
        if(thing.taken)
            return
        switch(thing.name){
            case "bullet":
                this.takeHit(thing,'5')
                break
        }
        this.cached = null
    }
    tryJump(){
        if(this.lastCollisions['down'] > 0)
            this.vy = 20
    }
}
class Fingerboy extends Walker {
    constructor(elementArray,x,y,gobounds){
        super(elementArray,x,y,gobounds)
        this.name = "Fingerboy"
        this.message = ["Spooki boi"]
        this.sona = 'fingerboy.png'
        this.sonawidth = 1.2
        
        this.moving = 5
        this.friction = 0.3
        this.maxAirSpeed = 20
        this.sideLeft = true
        this.head = null
        this.throwing = 0
        this.throwthink = 10
        this.deading = 5
        this.throwingObject = null
        this.bounds = [-70,-60,70,60]
        
        this.triggered = null
        
        this.hp = 20
        this.maxhp = 20
        
        this.politicalposition = 'spooky'
        
    }
    move(){
        super.move()
        if(this.dead){
            this.moving = 0
            this.bounds[1] = 0
            this.bounds[3] = 30
            return
        }
        if(this.triggered == null){
            if(this.lastCollisions['left'] > 1){
                this.moving = -5
            } else if(this.lastCollisions['right'] > 1){
                this.moving = 5
            }
        } else {
            if(Math.abs(this.vx) < 4 || this.lastCollisions['left'] > 1 || this.lastCollisions['right'] > 1)
                this.tryJump()
            var lastside = this.sideLeft
            if(this.lastCollisions['up'] > 1){            
                this.moving = 0
            } else if(this.triggered.x < this.x - 80) {
                this.moving = -8
                this.sideLeft = true
            } else if(this.triggered.x > this.x + 80){
                this.moving = 8
                this.sideLeft = false
            } else {
                this.moving = 0
            }
            if(this.sideLeft != lastside)
                this.cached = null
            
        }
        
    }
    seen(someone){
        var nottriggered = this.triggered == null
        if(this.triggered == null || this.triggered == someone)
            if(this.politicalposition != someone.politicalposition)
                this.triggered = someone
        
        if(this.triggered == someone && someone.dead == true){
            this.triggered = null
        }
        
        if(nottriggered && this.triggered)
            this.cached = null
    }
    tryJump(){
        if(this.lastCollisions['down'] > 0)
            this.vy = 23
    }
    
    getThing(){
        if(this.cached == null){
            var body
                this.cached = {
                    objs:[
                        this.dead ? {
                            type:'image',
                            src:'fingerboy-dead.png',
                            bounds:[-80,5,80,80], 
                            flipped:this.sideLeft
                        }
                        : {
                            type:'image',
                            src:'fingerboy.png',
                            bounds:[-100,-80,100,80], 
                            flipped:this.sideLeft
                        }
                    ],
                }
        }
        return this.cached
    }
    loot(){
        for(var i = 0;i<3;i++){
            var loot
            if(Math.random() < 0.2)
                loot = new Soylent(this.x,this.y,2)
            else
                loot = new Buggerino(this.x,this.y,Math.floor(Math.random()*6)+1)
            loot.vy = 16
            loot.vx = i*12-12
            this.elementArray.push(loot)
        }
    }
}
class ScienceGuard extends Mob {
    constructor(elementArray,x,y,gobounds,sideRight){
        super(elementArray,x,y,gobounds)
        this.name = "Science guard"
        this.message = ["You should have listened what doctor Ouchie","said, now one more person is dead.","Doctor will write COVID caused it."]
        this.sona = 'scienceguard-angry.png'
        this.sonawidth = 1.2
        
        this.moving = 0
        this.friction = 0.3
        this.maxAirSpeed = 15
        this.sideLeft = sideRight ? false : true
        this.head = null
        this.throwing = 0
        this.throwthink = 10
        this.deading = 5
        this.throwingObject = null
        this.bounds = [-90,-80,90,80]
        
        this.hp = 11
        this.maxhp = 11
        
    }
    canThrow(objectName){
        switch(objectName){
            case "bullet":
                return new Bullet(0,Math.random()*20-50,this)
                break
        }
        return null
    }
    move(){
        super.move()
            
            
        var previousSL = this.sideLeft
        if(this.moving < 0)
            this.sideLeft = true
        else if(this.moving > 0)
            this.sideLeft = false
        if(this.sideLeft != previousSL)
            this.cached = null
            
        if(this.dead){
            this.moving = 0
            return
        }
        
        if(this.triggered != null){
            var lastside = this.sideLeft
            if(this.triggered.x < this.x - 80) {
                this.moving = -5
                this.sideLeft = true
            } else if(this.triggered.x > this.x + 80){
                this.moving = 5
                this.sideLeft = false
            } else {
                this.moving = 0
            }
            if(this.sideLeft != lastside)
                this.cached = null
            
            if(this.throwthink == 0 && this.throwing == 0){
                this.prepareToThrow("bullet",this.elementArray)
                this.throwthink = 5
            }
            if(this.throwthink > 0 && this.throwthink < 4 && this.throwing == 1){
                this.throw()
            }
        } else {
            if(this.throwingObject != null)
                this.throw()
        }
        
        if(this.throwthink > 0){
            this.throwthink--
        }
        if(this.throwingObject != null){
            this.alignThrowingObject()
        } else if(this.throwing == 2){
            this.throwing = 0
            this.cached = null
        }
    }
    prepareToThrow(name,elementArray){
        var object = this.canThrow(name)
        if(object){
            elementArray.push(object)
            this.cached = null
            this.throwing = 1
            this.throwingObject = object
            this.alignThrowingObject()
        }
    }
    throw(){
        this.cached = null
        this.throwing = 2
        this.throwingObject.throw()
        this.throwingObject.vy = Math.random()*6-3
        this.throwingObject = null
    }
    alignThrowingObject(){
        this.throwingObject.x = this.x + (this.sideLeft ? -100 : 100)
        this.throwingObject.y = this.y-20
        this.throwingObject.cached = null
        
        this.throwingObject.keepAlive()
    }
    seen(someone){
        var nottriggered = this.triggered == null
        if(this.sideLeft && someone.x < this.x || !this.sideLeft && someone.x > this.x || this.triggered == someone)
            if(someone.masked != true)
                this.triggered = someone
        
        if(this.triggered == someone && someone.dead == true){
            this.triggered = null
        }
        
        if(nottriggered && this.triggered)
            this.cached = null
    }
    getThing(){
        if(this.cached == null){
            var body
            switch(this.throwing){
                case 0: body = this.triggered == null ? 'scienceguard.png' : 'scienceguard-angry.png'; break
                case 1: body = 'scienceguard-angry.png'; break
                case 2: body = 'scienceguard-angry-shot.png'; break
            }
                this.cached = {
                    objs:[
                        {
                            type:'image',
                            src:body,
                            bounds:[-120 + (this.sideLeft ? -30 : 30),-80,120 + (this.sideLeft ? -30 : 30),80], 
                            flipped:this.sideLeft
                        }
                    ],
                }
        }
        return this.cached
    }
    
}


class Joooos extends Walker {
    constructor(elementArray,x,y,gobounds){
        super(elementArray,x,y,gobounds)
        this.name = "Ultimate schizo retard"
        this.message = [
            "ITS DA JOOOOOOOOOOOOOOOOOOOOOOOO",
            "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
            "OOOOOOOOOOOOOOOOOOOOOOZ!!!!!!!!!",
            "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        ]
        this.sona = 'joooos1.png'
        this.sonawidth = 1.2
        
        this.moving = 0
        this.friction = 0.3
        this.maxAirSpeed = 15
        this.sideLeft = true
        this.head = null
        this.throwing = 0
        this.throwthink = 10
        
        this.touhou = 0
        
        this.jooing = 5
        this.deading = 5
        this.throwingObject = null
        this.bounds = [-140,-40,140,200]
        
        this.politicalposition = 'ultimateschizo'
        
        this.sleeping = true
        
        this.hp = 100
        this.maxhp = 100
        
    }
    canThrow(objectName){
        return new BigGreentext(0,0,this,objectName)
    }
    move(){
        super.move()
            
            
        var previousSL = this.sideLeft
        if(this.sideLeft != previousSL)
            this.cached = null
            
        if(this.dead){
            this.moving = 0
            return
        }
        
        if(!this.sleeping){
            var lastside = this.sideLeft
            
            if(this.moving == 0)
                this.moving = -8
            if(this.lastCollisions['left'] > 1){
                this.moving = -8
            } else if(this.lastCollisions['right'] > 1){
                this.moving = 8
            }
            this.jooing--
            if(this.jooing % 5 == 0){
                this.cached = null
                var schizoTheories = ['POOP','JOOOOS','JOOOOOZ','JOOOOOOZ','NIGGERS','TROOOONS','TROOOOOONS','CATTLE','GLOWIES']
                schizoTheories[0] = 'POOP'+thremboize(Math.floor(Math.random()*7+1))
                this.prepareToThrow(schizoTheories[Math.floor(Math.random()*schizoTheories.length)],this.elementArray)
                this.throw()
                
            }
            if(this.jooing <= 0){
                this.jooing = 9
            }
            this.tryJump()
        } else {
            for(var i in this.lastCollisions){
                if(this.lastCollisions[i] > 0 && i != 'down')
                    this.sleeping = false
            }
        }
    }
    tryJump(){
        if(this.lastCollisions['down'] > 0)
            this.vy = 20
    }
    prepareToThrow(name,elementArray){
        var object = this.canThrow(name)
        if(object){
            elementArray.push(object)
            this.cached = null
            this.throwing = 1
            this.throwingObject = object
            this.alignThrowingObject()
        }
    }
    throw(){
        this.cached = null
        this.throwing = 2
        this.throwingObject.throw()
        var rot = this.touhou / 20 *2*Math.PI
        this.touhou++
        this.throwingObject.vx = -Math.cos(rot)*12
        this.throwingObject.vy = Math.sin(rot)*12
        this.throwingObject = null
    }
    alignThrowingObject(){
        this.throwingObject.x = this.x
        this.throwingObject.y = this.y+40
        this.throwingObject.cached = null
        
        this.throwingObject.keepAlive()
    }
    seen(someone){
        /*
        var nottriggered = this.triggered == null
        if(!this.sleeping && (someone.x < this.x || someone.x > this.x || this.soyak == someone))
            if(someone.masked != true)
                this.triggered = someone
        
        if(this.triggered == someone && someone.dead == true){
            this.triggered = null
        }
        
        if(nottriggered && this.triggered)
            this.cached = null
            */
    }
    tryTake(thing){
        super.tryTake(thing)
        if(thing.taken)
            return
        switch(thing.name){
            case "downvote":
                this.takeHit(thing,0,0)
                thing.taken = true
                this.taken = true

                this.sleeping = false
                break
            case "redditcomment":
                this.takeHit(thing,0,0)
                thing.taken = true
                this.taken = true
                
                this.sleeping = false
                break
        }
    }
    getThing(){
        if(this.cached == null){
            var body
            if(this.dead){
                body = 'joooos4.png'
            } else if(this.sleeping){
                body = 'joooos3.png'
            } else {
                body = this.jooing >= 5 ? 'joooos1.png' : 'joooos2.png'
            }
            this.cached = {
                objs:[
                    {
                        type:'image',
                        src:body,
                        bounds:[-140,-80,140,200], 
                        flipped:false
                    }
                ],
            }
        }
        return this.cached
    }
    
    notifyCollision(direction,colliding){
        super.notifyCollision(direction,colliding)
        if(!colliding.taken)
            switch(colliding.name){
                case "Meds":
                    this.takeHitFromMob(colliding, '25')
                    colliding.taken = true
                    colliding.cached = null //very bad
                    break
            }
    }
    loot(){
        var loot = new Key(this.x,this.y,"2")
        loot.vy = 20
        loot.vx = 0
        this.elementArray.push(loot)
    }
}

class Meds extends Mob {
    constructor(elementArray,x,y,gobounds,sideRight){
        super(elementArray,x,y,gobounds)
        this.name = "Meds"
        this.message = ["HACKER!!!",'CIA GET HIM!!!!','NOW!!!!!']
        this.sona = 'meds.png'
        this.sonawidth = 1.2
        
        this.dead = true
        
        this.moving = 0
        this.friction = 0.3
        this.maxAirSpeed = 15
        this.sideLeft = sideRight ? false : true
        this.head = null
        this.throwing = 0
        this.throwthink = 10
        this.deading = 5
        this.throwingObject = null
        this.bounds = [-50,-30,50,30]
        
        this.taken = false
        
        this.hp = 11
        this.maxhp = 11
        
    }
    move(){
        super.move()
        
        if(this.taken)
            this.bounds[3] = 10
            
        if(this.lastCollisions['left'] > 0 && this.vx > -15){
            this.vx-=1
        }
        if(this.lastCollisions['right'] > 0 && this.vx < 15){
            this.vx+=1
        }
            
        var previousSL = this.sideLeft
    }
    getThing(){
        if(this.cached == null){
                this.cached = {
                    objs:[
                        {
                            type:'image',
                            src:this.taken ? 'meds-empty.png' : 'meds.png',
                            bounds:[-50,-30,50,30], 
                            flipped:false
                        }
                    ],
                }
        }
        return this.cached
    }
    
}

class AttacksYou extends Mob {
    constructor(elementArray,x,y,gobounds,sideRight){
        super(elementArray,x,y,gobounds)
        this.name = "Attacks You"
        this.message = ["ATTACKS YOU!"]
        this.sona = 'atakuje-ciebie.png'
        this.sonawidth = 1.2
        
        this.moving = 0
        this.friction = 0.3
        this.maxAirSpeed = 40
        this.touchable = false
        this.crashable = false
        this.solid = false

        this.sideLeft = sideRight ? false : true
        
        this.taken = false  
        
        this.head = null
        this.throwing = 0
        this.deading = 5
        this.throwingObject = null
        this.bounds = [-140,-80,140,160]
        
        this.hp = 10
        this.maxhp = 10
        
        this.ready = false
    }
    move(){
        super.move()
            
        if(this.dead){
            this.moving = 0
        }
        if(!this.taken)
            if(this.triggered != null){
                var r = Math.sqrt(Math.pow(this.x - (this.triggered.x + (this.triggered.sideLeft ? 40 : -40)),2) + Math.pow(this.y - this.triggered.y,2))

                if(!this.ready){
                    this.ready = true
                    this.cached = null
                    this.vx = -25 * (this.x - (this.triggered.x) + (this.triggered.sideLeft ? 40 : -40)) / r
                    this.vy = -25 * (this.y - this.triggered.y) / r
                }
            } else if(!this.ready) {
                this.vx = 0
                this.vy = 0
            }
        
    }
    seen(someone){
        var nottriggered = this.triggered == null
        if(this.triggered == null)
            if(this.sideLeft && someone.x < this.x || !this.sideLeft && someone.x > this.x)
                if(someone.politicalposition == 'science')
                    this.triggered = someone
        
        /*
        if(this.triggered == someone && someone.dead == true){
            this.triggered = null
        }*/
        
        if(nottriggered && this.triggered)
            this.cached = null
    }
    getThing(){
        if(this.cached == null){
            this.cached = {
                objs:this.triggered ? [
                    {
                        type:'image',
                        src:'atakuje-ciebie.png',
                        bounds:[-120 + (this.sideLeft ? -30 : 30),-80,120 + (this.sideLeft ? -30 : 30),80], 
                        flipped:this.sideLeft
                    }
                ] : [],
            }
        }
        return this.cached
    }
    tryTake(thing){
        super.tryTake(thing)
        if(thing.taken)
            return
        switch(thing.name){
            case "downvote":
                this.takeHit(thing,0)
                thing.taken = true
                this.taken = true
                this.vx = thing.vx*2
                break
            case "redditcomment":
                this.takeHit(thing,0)
                thing.taken = true
                this.taken = true
                this.vx = thing.vx*2
                break
        }
    }
    
}
class Human extends Walker {
    constructor(elementArray,x,y,gobounds){
        super(elementArray,x,y,gobounds)
        this.moving = 0
        this.friction = 0.1
        this.maxAirSpeed = 15
        this.sideLeft = false
        this.head = null
        this.throwing = 0
        this.deading = 5
        this.throwingObject = null
        this.headwarp = [1,1,1,1,1,1]
        
    }
    move(){
        super.move()
        
        if(this.throwingObject != null){
            this.alignThrowingObject()
        } else if(this.throwing == 2){
            this.throwing = 0
            this.cached = null
        }
    }
    prepareToThrow(name,elementArray){
        var object = this.canThrow(name)
        if(object){
            elementArray.push(object)
            this.cached = null
            this.throwing = 1
            this.throwingObject = object
            this.alignThrowingObject()
        }
    }
    throw(){
        this.cached = null
        this.throwing = 2
        this.throwingObject.throw()
        this.throwingObject.y += 30
        this.throwingObject = null
    }
    alignThrowingObject(){
        this.throwingObject.x = this.x + (this.sideLeft ? 10 : -10)
        this.throwingObject.y = this.y-10
        this.throwingObject.cached = null
    }
    notifyCollision(direction,colliding){
        super.notifyCollision(direction,colliding)
        if(!colliding.dead && colliding.triggered)
            switch(colliding.name){
                case "Fingerboy":
                    if(direction == 'up'){
                        this.takeHitFromMob(colliding, '2')
                        this.vx = -10
                    } else if(direction == 'left'){
                        this.takeHitFromMob(colliding, '2')
                        this.vx = -10
                    } else if(direction == 'right'){
                        this.takeHitFromMob(colliding, '2')
                        this.vx = 10
                    }
                    break
            }
        if(!colliding.dead && !colliding.sleeping)
            switch(colliding.name){
                case "Ultimate schizo retard":
                    if(direction == 'up'){
                        this.takeHitFromMob(colliding, '4')
                        this.vx = Math.random()*20-10
                    } else if(direction == 'left'){
                        this.takeHitFromMob(colliding, '4')
                        this.vx = -10
                    } else if(direction == 'right'){
                        this.takeHitFromMob(colliding, '4')
                        this.vx = 10
                    }
                    break
            }
    }
    getThing(){
        if(this.cached == null){
            var body
            switch(this.throwing){
                case 0: body = 'normal.png'; break
                case 1: body = 'throwing.png'; break
                case 2: body = 'throwed.png'; break
            }
            if(!this.dead){
                this.cached = {
                    objs:[
                        {
                            type:'image',
                            src:body,
                            bounds:[-25 + (this.sideLeft ? 5 : -5),-50,25 + (this.sideLeft ? 5 : -5),50], 
                            flipped:this.sideLeft
                        },
                        {
                            type:'image',
                            src:this.head,
                            bounds:[-25*this.headwarp[0] + (this.sideLeft ? 5 : -5)*this.headwarp[4],-13*this.headwarp[1],25*this.headwarp[2] + (this.sideLeft ? 5 : -5)*this.headwarp[4],50*this.headwarp[3]], 
                            flipped:this.sideLeft
                        },
                    ],
                }
            } else if(this.deading > 0){
                this.cached = {
                    objs:[
                        {
                            type:'image',
                            src:'deading.png',
                            bounds:[-25 + (this.sideLeft ? 5 : -5),-50,25 + (this.sideLeft ? 5 : -5),50], 
                            flipped:this.sideLeft
                        },
                        {
                            type:'image',
                            src:this.headdead,
                            bounds:[-25*this.headwarp[0] + (this.sideLeft ? 5 : -5)*this.headwarp[4],-13*this.headwarp[1],25*this.headwarp[2] + (this.sideLeft ? 5 : -5)*this.headwarp[4],50*this.headwarp[3]], 
                            flipped:this.sideLeft
                        },
                    ],
                }
            } else {
                this.cached = {
                    objs:[
                        {
                            type:'image',
                            src:'dead.png',
                            bounds:[-25 + (this.sideLeft ? 5 : -5),-53,25 + (this.sideLeft ? 5 : -5),0], 
                            flipped:!this.sideLeft
                        },
                        {
                            type:'image',
                            src:(this.headdead ? this.headdead : this.head),
                            bounds:[-25 -(this.sideLeft ? 15 : -15),-43,25 - (this.sideLeft ? 15 : -15),15], 
                            flipped:this.sideLeft
                        },
                    ],
                }
            }
        }
        return this.cached
    }
}
class Soyak extends Human {
    constructor(elementArray,x,y){
        super(elementArray,x,y)
        this.name = "Yourself"
        this.message = ["Did you secretly want to join the 41%?!?!?!"]
        this.sona = 'jaksona.png'
        //this.sonawidth = 0.8
        
        this.bounds = [-25,-50,25,50]
        
        this.keys = new Set()
        
        this.hp = 11
        this.maxhp = 11
        
        //this.proteinerino = 0
        this.soypoints = 0
        this.head = 'sojak.png'
        this.headdead = 'sojakdead.png'
        this.masked = false
        
        this.politicalposition = 'science'
    }
    canThrow(objectName){
        switch(objectName){
            case "downvote":
                if(this.getSoypoints(3)){
                    return new Downvote(0,0,this)
                }
                break
            case "incelphobicslur":
                if(this.getSoypoints(11)){
                    return new RedditComment(0,0,this,'INCEL')
                }
                break
            case "chudphobicslur":
                if(this.getSoypoints(15)){
                    return new RedditComment(0,0,this,'CHUDCEL')
                }
                break
            case "pissbabyphobicslur":
                if(this.getSoypoints(11)){
                    return new RedditComment(0,0,this,'PISSBABY')
                }
                break
				case "shoot":
                if(this.getSoypoints(20)){
                    return new Bullet(0,0,this)
                }
                break
        }
        return null
    }
    getSoypoints(numbah){
        if(this.soypoints < numbah)
            return false
        this.soypoints -= numbah
        return true
    }
    kys(){
        this.hp -= 5
        this.lasthit = this
    }
    tryTake(thing){
        super.tryTake(thing)
        if(thing.taken || thing.owner == this)
            return
            
        switch(thing.name){
            case "Attacks You":
                this.takeHitFromMob(thing, 15)
                thing.taken = true
                break
            case "soylent":
            case "bug":
                if('hp' in thing)
                    this.hp = Math.min(this.maxhp,this.hp + thing.hp)
                if('soypoints' in thing)
                    this.soypoints += thing.soypoints
                thing.taken = true
                break
            case "mask":
                this.masked = true
                thing.remove = true
                break
            case "key":
                this.keys.add(thing.code)
                thing.taken = true
                break
            case "downvote":
                this.takeHit(thing,1)
                thing.taken = true
                break
            case "redditcomment":
                this.takeHit(thing,1)
                break
            case "greentext":
                var hptaken = thing.slur == 'nigger' ? 2 : 1
                this.takeHit(thing,hptaken)
                break
            case "heart":
                this.maxhp = Math.max(this.maxhp,thing.maxhp)
                this.hp = this.maxhp
                thing.taken = true
                thing.cached = null
                break
            case "checkpoint":
                thing.actualizeStartingPoint()
                thing.taken = true
                thing.cached = null
                break
        }
        this.cached = null
    }
    getThing(){
        if(this.cached == null){
            this.cached = super.getThing()
            if(this.masked)
            this.cached.objs.push({
                type:'image',
                src:'mask.png',
                bounds:[-20 - (this.sideLeft ? 2 : -2),-15,20 - (this.sideLeft ? 2 : -2),20], 
            })
        }
        return this.cached
    }
    move(){
        super.move()
        if(this.dead){
            if(this.cached == null)
                this.bounds = [-25,-50,25,0]
            return
        }
    }
}


class Soybro extends Human {
    constructor(elementArray,x,y){
        super(elementArray,x,y)
        this.name = "Soybro"
        this.message = ["DIDN'T YOU KNOW THAT","DOWNVOTES HURT?!?!?!","(they are used to fight the r/THE_DONALD"," remnants, not normal soyim)"]
        this.sona = 'jaksona.png'
        //this.sonawidth = 0.8
        
        this.bounds = [-25,-50,25,50]
        
        this.hp = 11
        this.maxhp = 11
        
        this.throwthink = 0
        this.soypoints = 190
        this.head = 'strachjak.png'
        this.headdead = 'sojakdead.png'
        this.masked = false
        
        this.rant = ""
        
        this.triggered = null
        
        this.sideLeft = true
        this.lastside = this.sideLeft
        
        this.politicalposition = 'science'
    }
    canThrow(objectName){
        if(objectName == 'downvote' && this.getSoypoints(3)){
            return new Downvote(0,0,this)
        } else {
            if(this.getSoypoints(11)){
                return new RedditComment(0,0,this,objectName)
            }
        }
        return null
    }
    getSoypoints(numbah){
        if(this.soypoints < numbah)
            return false
        this.soypoints -= numbah
        return true
    }
    kys(){
        this.hp -= 5
        this.lasthit = this
    }
    tryTake(thing){
        super.tryTake(thing)
        if(thing.taken || thing.owner == this)
            return
            
        switch(thing.name){
            case "Attacks You":
                this.takeHitFromMob(thing, 15)
                thing.taken = true
                break
            case "downvote":
                if(!this.triggered && this.rant.length == 0)
                    this.rant = "NOOOO YOU WEREN'T SUPPOSED TO DO THAT HOW MY HECKIN KARMA CAN RECOVER !!!!!!!! !!!!!!"

                this.triggered = thing.owner
                
                this.takeHit(thing,1)
                thing.taken = true
                break
            case "redditcomment":
                if(!this.triggered && this.rant.length == 0)
                    this.rant = "NOOOO YOU WEREN'T SUPPOSED TO DO THAT HOW MY HECKIN KARMA CAN RECOVER !!!!!!!! !!!!!!"

                this.triggered = thing.owner
                this.takeHit(thing,1)
                break
            case "greentext":
                var hptaken = thing.slur == 'nigger' ? 2 : 1
                this.triggered = thing.owner
                this.takeHit(thing,hptaken)
                break
        }
        this.cached = null
    }
    getThing(){
        if(this.cached == null){
            this.cached = super.getThing()
        }
        return this.cached
    }
    
    seen(someone){
        if(this.sideLeft /* IMPOSSIBLE O_O */ && someone.x < this.x || !this.sideLeft && someone.x > this.x || this.triggered == someone)
            if(((someone.politicalposition != 'science' && someone.politicalposition != 'ultimateschizo') || this.triggered == someone) && !someone.dead){
                this.triggered = someone
                this.lastside = this.sideLeft
                this.sideLeft = someone.x < this.x
                if(this.sideLeft != this.lastside)
                    this.cached = null
            }
        
        if(this.triggered == someone && someone.dead == true)
            this.triggered = null
    }
    move(){
        super.move()
        if(this.dead){
            if(this.cached == null)
                this.bounds = [-25,-50,25,0]
            return
        }
        
        if(this.triggered != null){
            if(this.lastCollisions['left'] > 1 || this.lastCollisions['right'] > 1){
                this.tryJump()
            }
            var lastside = this.sideLeft
            if(this.lastCollisions['up'] > 1){            
                this.moving = 0
            } else if(this.triggered.x < this.x - 120) {
                this.moving = -5
                this.sideLeft = true
            } else if(this.triggered.x > this.x + 120){
                this.moving = 5
                this.sideLeft = false
            } else {
                this.moving = 0
            }
            if(this.sideLeft != lastside)
                this.cached = null
            
            if(this.throwthink == 0 && this.throwing == 0 && this.triggered.y < this.y + 30){
                if(this.rant.length > 0){
                    var slurtype = this.rant.split(' ')[0]
                    this.prepareToThrow(slurtype,this.elementArray)
                    this.rant = this.rant.split(' ').slice(1).join(' ')
                    this.throwthink = 10
                } else {
                    this.prepareToThrow('downvote',this.elementArray)
                    this.throwthink = 10
                }
            }
            if(this.throwthink > 0 && this.throwthink < 7 && this.throwing == 1){
                this.throw()
            }
        }
        
        if(this.throwthink > 0){
            this.throwthink--
        }
    }
}


class Chud extends Human {
    constructor(elementArray,x,y,gobounds){
        super(elementArray,x,y,gobounds)
        this.name = 'Chud'
        this.message = ["Wow! You were BTFO'd by a fricking incel chud."]
        this.moving = -5
        this.bounds = [-25,-50,25,50]
        this.head = 'czud.png'
        this.headdead = 'czuddead.png'
        this.sona = 'chudsona.png' //chudsona.png
        
        this.triggered = null   //lmao, chuds are always triggered, so this is unreal unproven and not peer-reviewed
        
        this.throwthink = 0
        
        this.politicalposition = 'nazi'
    }
    canThrow(objectName){
        switch(objectName){
            case "transphobicslur":
                return new Greentext(0,0,this,"ywnbaw")
                break
            case "racistslur":
                return new Greentext(0,0,this,"nigger")
                break
            case "soyboy":
                return new Greentext(0,0,this,"soiboy")
                break
        }
        return null
    }
    move(){
        super.move()
        
        if(this.dead){
            if(this.cached == null)
                this.bounds = [-25,-50,25,0]
            return
        }
        
        if(this.triggered == null){
            if(this.lastCollisions['left'] > 1){
                this.moving = -5
            } else if(this.lastCollisions['right'] > 1){
                this.moving = 5
            }
            if(this.throwingObject != null)
                this.throw()
        
        } else {
            if(this.lastCollisions['left'] > 1 || this.lastCollisions['right'] > 1){
                this.tryJump()
            }
            var lastside = this.sideLeft
            if(this.lastCollisions['up'] > 1){            
                this.moving = 0
            } else if(this.triggered.x < this.x - 80) {
                this.moving = -5
                this.sideLeft = true
            } else if(this.triggered.x > this.x + 80){
                this.moving = 5
                this.sideLeft = false
            } else {
                this.moving = 0
            }
            if(this.sideLeft != lastside)
                this.cached = null
            
            if(this.throwthink == 0 && this.throwing == 0){
                var slurtype = Math.random() < 0.33 ? "transphobicslur" : (Math.random() < 0.5 ? "racistslur" : "soyboy")
                this.prepareToThrow(slurtype,this.elementArray)
                this.throwthink = 10
            }
            if(this.throwthink > 0 && this.throwthink < 7 && this.throwing == 1){
                this.throw()
            }
        }
        
        if(this.throwthink > 0){
            this.throwthink--
        }
        
    }
    
    loot(){
        for(var i = 0;i<3;i++){
            var loot
            if(Math.random() < 0.1)
                loot = new Soylent(this.x,this.y)
            else
                loot = new Buggerino(this.x,this.y,Math.floor(Math.random()*6)+1)
            loot.vy = 16
            loot.vx = i*12-12
            this.elementArray.push(loot)
        }
    }
    seen(someone){
        if(this.sideLeft /* IMPOSSIBLE O_O */ && someone.x < this.x || !this.sideLeft && someone.x > this.x || this.triggered == someone)
            if(someone.politicalposition != 'nazi' && !someone.dead)
                this.triggered = someone
        
        if(this.triggered == someone && someone.dead == true)
            this.triggered = null
    }
    tryTake(thing){
        super.tryTake(thing)
        if(thing.taken)
            return
        switch(thing.name){
            case "downvote":
                this.takeHit(thing,1)
                thing.taken = true
                break
            case "redditcomment":
                this.takeHit(thing,5)
                thing.taken = true
                break
        }
    }
}
class SerialShooter extends Chud {
    constructor(elementArray,x,y){
        super(elementArray,x,y)    
        this.name = "Serial shooter chud"
        this.message = ["Who let the chuds out"]
        this.sona = 'chudsona2.png'
        this.sonawidth = 0.8
        
        this.head = 'serial-killer.png'
        this.headdead = 'czuddead.png'
    }
    canThrow(objectName){
        switch(objectName){
            case "bullet":
                return new Bullet(0,0,this)
                break
        }
        return null
    }
    move(){
        Human.prototype.move.call(this)
        
        if(this.dead){
            if(this.cached == null)
                this.bounds = [-25,-50,25,0]
            return
        }
        
        if(this.triggered == null){
            if(this.lastCollisions['left'] > 1){
                this.moving = -5
            } else if(this.lastCollisions['right'] > 1){
                this.moving = 5
            }
            if(this.throwingObject != null)
                this.throw()
        
        } else {
            if(this.lastCollisions['left'] > 1 || this.lastCollisions['right'] > 1){
                this.tryJump()
            }
            var lastside = this.sideLeft
            if(this.lastCollisions['up'] > 1){            
                this.moving = 0
            } else if(this.triggered.x < this.x - 80) {
                this.moving = -5
                this.sideLeft = true
            } else if(this.triggered.x > this.x + 80){
                this.moving = 5
                this.sideLeft = false
            } else {
                this.moving = 0
            }
            if(this.sideLeft != lastside)
                this.cached = null
            
            if(this.throwthink == 0 && this.throwing == 0){
                var slurtype = "bullet"
                this.prepareToThrow(slurtype,this.elementArray)
                this.throwthink = 10
            }
            if(this.throwthink > 0 && this.throwthink < 7 && this.throwing == 1){
                this.throw()
            }
        }
        
        if(this.throwthink > 0){
            this.throwthink--
        }
        
    }
    getThing(){
        if(this.cached == null){
            var body = 'handless.png'
            if(!this.dead){
                this.cached = {
                    objs:[
                        {
                            type:'image',
                            src:body,
                            bounds:[-25 + (this.sideLeft ? 5 : -5),-50,25 + (this.sideLeft ? 5 : -5),50], 
                            flipped:this.sideLeft
                        },
                        {
                            type:'image',
                            src:this.head,
                            bounds:[-40 - 3.1*(this.sideLeft ? 5 : -5),-13,40 - 3.1*(this.sideLeft ? 5 : -5),70], 
                            flipped:this.sideLeft
                        },
                    ],
                }
            } else if(this.deading > 0){
                this.cached = {
                    objs:[
                        {
                            type:'image',
                            src:'deading.png',
                            bounds:[-25 + (this.sideLeft ? 5 : -5),-50,25 + (this.sideLeft ? 5 : -5),50], 
                            flipped:this.sideLeft
                        },
                        {
                            type:'image',
                            src:this.headdead,
                            bounds:[-25*this.headwarp[0] + (this.sideLeft ? 5 : -5)*this.headwarp[4],-13*this.headwarp[1],25*this.headwarp[2] + (this.sideLeft ? 5 : -5)*this.headwarp[4],50*this.headwarp[3]], 
                            flipped:this.sideLeft
                        },
                    ],
                }
            } else {
                this.cached = {
                    objs:[
                        {
                            type:'image',
                            src:'dead.png',
                            bounds:[-25 + (this.sideLeft ? 5 : -5),-53,25 + (this.sideLeft ? 5 : -5),0], 
                            flipped:!this.sideLeft
                        },
                        {
                            type:'image',
                            src:(this.headdead ? this.headdead : this.head),
                            bounds:[-25 -(this.sideLeft ? 15 : -15),-43,25 - (this.sideLeft ? 15 : -15),15], 
                            flipped:this.sideLeft
                        },
                    ],
                }
            }
        }
        return this.cached
    }
}


class Thoughjak extends Human {
    constructor(elementArray,x,y,gobounds){
        super(elementArray,x,y,gobounds)    
        this.name = "Thoughjak"
        this.message = ["GO AND FUCKING QUOUTE THOUGHERS","ON 4CUCK"]
        this.sona = 'thoughsona.png'
        
        this.moving = -5
        this.bounds = [-25,-50,25,50]
        this.head = 'thoughjak.png'
        this.headdead = 'thoughjak.png'
        
        this.triggered = null   //lmao, chuds are always triggered, so this is unreal unproven and not peer-reviewed
        
        this.throwthink = 0
        
        this.politicalposition = 'antithougher'
    }
    canThrow(objectName){
        switch(objectName){
            case "though":
                return new Greentext(0,0,this,"though")
                break
        }
        return null
    }
    move(){
        super.move()
        
        if(this.dead){
            if(this.cached == null)
                this.bounds = [-25,-50,25,0]
            return
        }
        
        if(this.triggered == null){
            if(this.lastCollisions['left'] > 1){
                this.moving = -5
            } else if(this.lastCollisions['right'] > 1){
                this.moving = 5
            }
            if(this.throwingObject != null)
                this.throw()
        
        } else {
            //if(this.lastCollisions['left'] > 1 || this.lastCollisions['right'] > 1){
                this.tryJump()
            //}
            var lastside = this.sideLeft
            if(this.lastCollisions['up'] > 1){            
                this.moving = 0
            } else if(this.triggered.x < this.x - 80) {
                this.moving = -5
                this.sideLeft = true
            } else if(this.triggered.x > this.x + 80){
                this.moving = 5
                this.sideLeft = false
            } else {
                this.moving = 0
            }
            if(this.sideLeft != lastside)
                this.cached = null
            
            if(this.throwthink == 0 && this.throwing == 0){
                var slurtype = "though"
                this.prepareToThrow(slurtype,this.elementArray)
                this.throwthink = 20
            }
            if(this.throwthink > 0 && this.throwthink < 7 && this.throwing == 1){
                this.throw()
            }
        }
        this.rememberBounds()
        
        if(this.throwthink > 0){
            this.throwthink--
        }
        
    }
    
    loot(){
        for(var i = 0;i<3;i++){
            var loot
            if(Math.random() < 0.1)
                loot = new Soylent(this.x,this.y)
            else
                loot = new Buggerino(this.x,this.y,Math.floor(Math.random()*6)+1)
            loot.vy = 16
            loot.vx = i*12-12
            this.elementArray.push(loot)
        }
    }
    seen(someone){
        if(this.sideLeft /* IMPOSSIBLE O_O */ && someone.x < this.x || !this.sideLeft && someone.x > this.x || this.triggered == someone)
            if((this.triggered == null || someone.politicalposition != 'antithougher') && !someone.dead)
                this.triggered = someone
        
        if(this.triggered == someone && someone.dead == true)
            this.triggered = null
    }
    tryTake(thing){
        super.tryTake(thing)
        if(thing.taken || thing.owner == this)
            return
        switch(thing.name){
            case "downvote":
                this.takeHit(thing,1)
                break
            case "greentext":
            case "redditcomment":
                this.vx += thing.vx/2
                thing.vx = -thing.vx
                thing.slur = '>'+thing.slur
                thing.cached = null
                thing.owner = this
                break
        }
    }
}

class Solid extends Thing {
    constructor(x,y){
        super(x,y)
        this.solid = true
        this.touchable = true
    }
    tryTake(thing){
        if(thing.crashable)
            thing.taken = true
    }
}
class Rectangle extends Solid {
    constructor(x,y,width,height){
        super(x,y)
        this.width = width
        this.height = height
        this.bounds = [0,0,this.width,this.height]
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'polygon',
                    coords:[
                        [0,0],
                        [this.width,0],
                        [this.width,this.height],
                        [0,this.height],
                    ],
                    stroke:'#000000',
                    fill:'#666666',
                },
                {
                    type:'polygon',
                    coords:[
                        [10,10],
                        [this.width-10,10],
                        [this.width-10,this.height-10],
                        [10,this.height-10],
                    ],
                    stroke:'#00000000',
                    fill:'#888888',
                }
            ],
        }
        return this.cached
    }
    move(){
        super.move()
    }
}

class LockedRectangle extends Solid {
    constructor(x,y,width,height,code,keyHaver){
        super(x,y)
        this.code = code
        this.width = width
        this.height = height
        this.bounds = [0,0,this.width,this.height]
        this.keyHaver = keyHaver
        
        this.opening = false
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'polygon',
                    coords:[
                        [0,0],
                        [this.width,0],
                        [this.width,this.height],
                        [0,this.height],
                    ],
                    stroke:'#000000',
                    fill:'#ddbb44',
                },
                {
                    type:'polygon',
                    coords:[
                        [10,10],
                        [this.width-10,10],
                        [this.width-10,this.height-10],
                        [10,this.height-10],
                    ],
                    stroke:'#00000000',
                    fill:'#ffdd55',
                },
                {
                    type:'polygon',
                    coords:[
                        [this.width/2-20,this.height/2-20],
                        [this.width/2-20,this.height/2+20],
                        [this.width/2+20,this.height/2+20],
                        [this.width/2+20,this.height/2-20],
                    ],
                    stroke:'#000000',
                    fill:'#ddbb44',
                },
                {
                    type:'text',
                    text:'#'+this.code,
                    font:'14px sans-serif',
                    x:this.width/2,
                    y:this.height/2-5,
                    fill:'#000'
                }
            ],
        }
        return this.cached
    }
    move(){
        super.move()
        if(!this.opening){
            if(this.keyHaver.keys.has(this.code) && (this.keyHaver.x < this.x + this.width + 100 && this.keyHaver.x > this.x - 100 && this.keyHaver.y < this.y + this.height + 100 && this.keyHaver.y > this.y - 100)){
                this.opening = true
            }
        } else {
            if(this.height > 0){
                this.height -= 10
                this.bounds[3] = this.height
                this.cached = null
            } else {
                this.height = 0
            }
        }
    }
}

class Untouchable extends Thing {
    constructor(x,y){
        super(x,y)
        this.solid = false
        this.active = false
        this.name = null
    }
    move(){
        super.move()
        if(this.taken){
            this.cached = null
            this.alpha -= 5
        }
        if(this.alpha <= 0)
            this.remove = true
            
    }
}

class Lootable extends Untouchable {
    constructor(x,y){
        super(x,y)
    }
    move(){
        super.move()
        if(this.vx >= 1){
            this.vx -= 1
        } else if(this.vx <= -1){
            this.vx += 1
        } else {
            this.vx = 0
        }
        
        if(this.vy >= 1){
            this.vy -= 1 
        } else if(this.vy <= -1){
            this.vy += 1
        } else {
            this.vy = 0
        }
    }
}

class Soylent extends Lootable {
    constructor(x,y,type){
        super(x,y)
        this.solid = false
        this.active = false
        this.name = "soylent"
        this.bounds = [-20,-50,20,50]
        this.taken = false
        this.alpha = 100
        
        this.soytype = type ? type : 1
        this.hp = 5*this.soytype
        this.soypoints = 11*this.soytype
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'image',
                    src:'pychota'+this.soytype+'.png',
                    bounds:[-20,-50,20,50],
                    alpha:this.alpha
                }
            ],
        }
        return this.cached
    }
}



class Buggerino extends Lootable {
    constructor(x,y,bugnumber){
        super(x,y)
        this.solid = false
        this.active = false
        this.bugnumber = bugnumber
        this.name = "bug"
        this.bounds = [-30,-30,30,30]
        this.taken = false
        this.alpha = 100
        this.soypoints = 2
        this.hp = 1
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'image',
                    src:'robal'+this.bugnumber+'.png',
                    bounds:[-30,-30,30,30],
                    alpha:this.alpha
                }
            ],
        }
        return this.cached
    }
}


class Mask extends Untouchable {
    constructor(x,y){
        super(x,y)
        this.solid = false
        this.active = false
        this.name = "mask"
        this.bounds = [-30,-30,30,30]
        this.taken = false
        this.alpha = 100
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'image',
                    src:'mask.png',
                    bounds:[-30,-30,30,30],
                    alpha:this.alpha
                }
            ],
        }
        return this.cached
    }
}

class Key extends Lootable {
    constructor(x,y,code){
        super(x,y)
        this.solid = false
        this.active = false
        this.code = code
        this.name = "key"
        this.bounds = [-30,-30,30,30]
        this.taken = false
        this.alpha = 100
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'image',
                    src:'keyed.png',
                    bounds:[-30,-50,30,50],
                    alpha:this.alpha
                },
                {
                    type:'text',
                    text:'key #'+this.code,
                    font:'10px sans-serif',
                    x:0,
                    y:60,
                    fill:'#000'
                }
            ],
        }
        return this.cached
    }
}


class Text extends Thing {
    constructor(x,y,lines){
        super(x,y)
        this.solid = false
        this.lines = lines
        this.cached = null
        this.bounds = [-100,0,100,25*lines.length]
    }
    getThing(){
        if(this.cached == null){
            this.cached = {
                objs:[]
            }
            for(var i in this.lines){
                this.cached.objs.push({
                    type:'text',
                    text:this.lines[i],
                    x:0,
                    y:this.lines.length-i*25-1,
                    fill:'#000'
                })
            }
        }
        return this.cached
    }
}

class BackgroundImage extends Thing {
    constructor(x,y,src,bounds){
        super(x,y)
        this.solid = false
        this.cached = null
        this.src = src
        this.bounds = bounds
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'image',
                    src:this.src,
                    bounds:this.bounds,
                }
            ],
        }
        return this.cached
    }
}


class Throwable extends Untouchable {
    constructor(x,y,owner,originaltimespan){
        super(x,y)
        this.name = null
        this.owner = owner
        this.originalowner = owner
        this.crashable = false
        this.originaltimespan = originaltimespan == undefined ? 100 : originaltimespan
        this.timespan = this.originaltimespan
    }
    throw(){
        this.crashable = true
        this.vx = this.owner.sideLeft ? -20 : 20
    }
    keepAlive(){
        this.timespan = this.originaltimespan
    }
    move(){
        super.move()
        this.timespan--
        if(this.taken || this.timespan == 0)
            this.remove = true
    }
    
}

class HeartyPerson extends Untouchable {
    constructor(x,y,maxhp){
        super(x,y)
        this.cached = null
        this.bounds = [0,0,120,200]
        this.taken = false
        this.name = "heart"
        this.maxhp = maxhp
        this.crashable = true
        this.touchable = false
        this.remove = false
    }
    getThing(){
        if(this.cached == null){
            this.cached = {
                objs:[
                    {
                        type:'image',
                        src:!this.taken ? 'zserduchem.png' : 'bezserducha.png',
                        bounds:this.bounds,
                    }
                ],
            }
        }
        return this.cached
    }
}
class Checkpoint extends Untouchable {
    constructor(x,y,nottakenimage,takenimage,bounds,bounds2,actualize){
        super(x,y)
        this.cached = null
        this.bounds = bounds
        this.bounds2 = bounds2
        this.nottakenimage = nottakenimage
        this.takenimage = takenimage
        this.actualizeStartingPoint = () => {actualize(x,y)}
        this.taken = false
        this.name = "checkpoint"
        this.crashable = true
        this.touchable = false
        this.remove = false
    }
    getThing(){
        if(this.cached == null){
            this.cached = {
                objs:[
                    {
                        type:'image',
                        src:!this.taken ? this.nottakenimage : this.takenimage,
                        bounds:!this.taken ? this.bounds : this.bounds2,
                    }
                ],
            }
        }
        return this.cached
    }
}

class Downvote extends Throwable {
    constructor(x,y,owner){
        super(x,y,owner)
        this.cached = null
        this.bounds = [-10,-10,10,10]
        this.name = "downvote"
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'image',
                    src:'downvote.png',
                    bounds:this.bounds,
                    flipped:this.owner.sideLeft,
                }
            ],
        }
        return this.cached
    }
}

class Bullet extends Throwable {
    constructor(x,y,owner){
        super(x,y,owner)
        this.cached = null
        this.bounds = [-25,-15,25,15]
        this.name = "bullet"
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'image',
                    src:'szczał.png',
                    bounds:this.bounds,
                    flipped:this.owner.sideLeft,
                }
            ],
        }
        return this.cached
    }
}

class Greentext extends Throwable {
    constructor(x,y,owner,slur){
        super(x,y,owner)
        this.cached = null
        this.bounds = [-10,-10,10,10]
        this.name = "greentext"
        this.slur = slur
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'text',
                    font:'16px sans-serif',
                    text:'>' + this.slur,
                    x:0,
                    y:0,
                    fill:'#789922'
                }
            ],
        }
        return this.cached
    }
}

class BigGreentext extends Throwable {
    constructor(x,y,owner,slur){
        super(x,y,owner,250)
        this.cached = null
        this.bounds = [-40,-10,10,40]
        this.name = "greentext"
        this.slur = slur
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'text',
                    font:'36px Impact',
                    text:'>' + this.slur,
                    x:0,
                    y:0,
                    fill:'#789922'
                }
            ],
        }
        return this.cached
    }
}

class RedditComment extends Throwable {
    constructor(x,y,owner,slur){
        super(x,y,owner)
        this.cached = null
        this.bounds = [-60,0,100,32]
        this.name = "redditcomment"
        this.slur = slur
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'text',
                    font:'16px sans-serif',
                    text:this.slur,
                    x:-20,
                    y:0,
                    fill:'#000000'
                },
                {
                    type:'image',
                    src:'redditcomment.png',
                    bounds:this.bounds,
                    flipped:false,
                }
            ],
        }
        return this.cached
    }
}

class Piperino extends Thing {
    constructor(x,y,width,height){
        super(x,y)
        this.solid = false
        this.cached = null
        this.width = width
        this.height = height
        this.bounds = [0,0,width,height]
    }
    getThing(){
        if(this.cached == null)
        this.cached = {
            objs:[
                {
                    type:'polygon',
                    coords:[
                        [0,0],
                        [this.width,0],
                        [this.width,this.height],
                        [0,this.height],
                    ],
                    stroke:"#000",
                    fill:"#070"
                },
                {
                    type:'polygon',
                    coords:[
                        [10,10],
                        [this.width-10,10],
                        [this.width-10,this.height-10],
                        [10,this.height-10],
                    ],
                    stroke:"#00000000",
                    fill:"#0a0"
                },
                {
                    type:'polygon',
                    coords:[
                        [-20,0],
                        [this.width+20,0],
                        [this.width+20,50],
                        [-20,50],
                    ],
                    stroke:"#000",
                    fill:"#070"
                },
                {
                    type:'polygon',
                    coords:[
                        [-10,10],
                        [this.width+10,10],
                        [this.width+10,40],
                        [-10,40],
                    ],
                    stroke:"#00000000",
                    fill:"#0a0"
                },
                {
                    type:'polygon',
                    coords:[
                        [-20,this.height-50],
                        [this.width+20,this.height-50],
                        [this.width+20,this.height],
                        [-20,this.height],
                    ],
                    stroke:"#000",
                    fill:"#070"
                },
                {
                    type:'polygon',
                    coords:[
                        [-10,this.height-40],
                        [this.width+10,this.height-40],
                        [this.width+10,this.height-10],
                        [-10,this.height-10],
                    ],
                    stroke:"#00000000",
                    fill:"#0a0"
                },
            ],
        }
        return this.cached
    }
    
}
