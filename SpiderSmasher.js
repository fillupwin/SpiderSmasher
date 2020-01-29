
	var spider = {lvl:0,speed:0,health:0,attack:0,defense:0,sclass:0,stier:0,tmod:0,name:""};
	var player = {lvl:0,speed:0,health:0,attack:0,defense:0};



	function getSpidName()
	{
		var snClass = "";
		var snTier = "";
	
		if(spider.sclass == 1){snClass = "Runner";}
		if(spider.sclass == 2){snClass = "Titan";}
		if(spider.sclass == 3){snClass = "Warrior";}
		if(spider.sclass == 4){snClass = "Tank";}
		
		if(spider.stier == 1){snTier = "Peon";}
		if(spider.stier == 2){snTier = "Squire";}
		if(spider.stier == 3){snTier = "Knight";}
		if(spider.stier == 4){snTier = "Lord";}
		if(spider.stier == 5){snTier = "King";}
		if(spider.stier == 6){snTier = "God";}
		
		return "lvl " + spider.lvl + " " + snClass + " " + snTier;
	}
	
	function getRndInteger(min, max) 
	{
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}
	
	function genSpid() 
	{
		spider.lvl = getRndInteger(player.lvl, player.lvl + 5);
		spider.speed = getRndInteger(5, 25);
		spider.health = getRndInteger(5, 25);
		spider.attack = getRndInteger(5, 25);
		spider.defense = getRndInteger(5, 25);
		spider.sclass = getRndInteger(1, 4);
		spider.stier = getRndInteger(1, 6);
		spider.tmod = 1 + (.2 * spider.stier);
		
		if(spider.stier == 6){spider.tmod = 3;}
		
		if(spider.sclass == 1){spider.speed = (spider.speed + spider.lvl) * spider.tmod;}
		else{spider.speed = (spider.speed + spider.lvl);}
		if(spider.sclass == 2){spider.health = (spider.health + spider.lvl) * spider.tmod;}
		else{spider.health = (spider.health + spider.lvl);}
		if(spider.sclass == 3){spider.attack = (spider.attack + spider.lvl) * spider.tmod;}
		else{spider.attack = (spider.attack + spider.lvl);}
		if(spider.sclass == 4){spider.defense = (spider.defense + spider.lvl) * spider.tmod;}
		else{spider.defense = (spider.defense + spider.lvl);}
		
		spider.name = getSpidName();
		
		document.getElementById("sname").innerHTML = spider.name;
		document.getElementById("sspeed").innerHTML = "" + spider.speed;
		document.getElementById("shealth").innerHTML = "" + spider.health;
		document.getElementById("sattack").innerHTML = "" + spider.attack;
		document.getElementById("sdefense").innerHTML = "" + spider.defense;
	}
	function lvlUp(stat)
	{
		player.lvl += 1;
		
		player.speed += 2;
		player.health += 2;
		player.attack += 2;
		player.defense += 2;
	
		if(stat == 1){player.speed += 4;}
		if(stat == 2){player.health += 4;}
		if(stat == 3){player.attack += 4;}
		if(stat == 4){player.defense += 4;}
	
		document.getElementById("pspeed").innerHTML = "" + player.speed;
		document.getElementById("phealth").innerHTML = "" + player.health;
		document.getElementById("pattack").innerHTML = "" + player.attack;
		document.getElementById("pdefense").innerHTML = "" + player.defense;
		document.getElementById("pname").innerHTML = "lvl " + player.lvl + " Player";
	
		document.getElementById("pbspeed").disabled = true;
		document.getElementById("pbhealth").disabled = true;
		document.getElementById("pbattack").disabled = true;
		document.getElementById("pbdefense").disabled = true;
	}
	function revealButtons()
	{
		document.getElementById("pbspeed").disabled = false;
		document.getElementById("pbhealth").disabled = false;
		document.getElementById("pbattack").disabled = false;
		document.getElementById("pbdefense").disabled = false;
	}