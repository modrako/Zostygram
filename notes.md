Poznamky terminal - 
	ls – list directories/files
	cd – change directory
	npx create-next-app@latest – next js
	npm run dev – zapnes local server
	npm – no package manager
	npm run build – spravy build (release build)
	npm run start – zapne spraveny build
    npm install - stiahne npm

Poznamky git commandy -
	git init - spravy git
	git branch -m main 
	git config –global user.name „(meno moje)“ – spoji meno
	git config –global user.email „(moj mail)“ – spoji mail
	git remote add origin (git hub project link) – spoji github a projekt
	git remote -v – vypise githun link
	git add . – prida projekt na github

Poznamky tsx -
	Container cca = <div>
	Typography cca = <p>


Poznamky next js - 
	page  - stranka ktoru loaduje
	not-found – custom not found 404 stranka
	priecinky ktore su v () su ako keby neviditelne a len pre teba, nepouziva ich program
	priecinky ktore su v [] su premene na dynamicke adressy
    layout.tsx je base stranka ktora sa loaduje vsade

    Nextjs ma server a client side - client side loaduje stranku v prehliadacy a je pomalsia oproti server side. ale vieme cez client side brat user input
    	server side je default a client side sa pouziva tak ze na horok projektu dame 

GitHub - 
	git – robi backupy projectky na ktore vies roll backnut
	github – portujes svoj naj lepsi git na github z ktore ho to ide na production server
	ked commitujes na github projekt backup musi mat meno
Vercel-
	Vercel sa pouziva na to aby si prepojil svoje next.js github repo z vercelom ktory ho 	automaticky bude uplodovat na web 

NextAuth -
	dopln ako sa eduje inak ta mikne
	login keys a secrety dame do suboru .env ktory nedavame na github cez gitignore. kontekt tohto suboru mas na maily

Chapter 8 neviem -
	Public und Private -
 		My chceme aby sa user nedostal na niake pod stranky pokial nesiu lognuty ako to spravime
   		pod stranky ktore necheme aby sa do nich dostal dame do (private) foldra 
     		a pod stranky ktore chceme dame do (public), do private potom pridame layout.tsx a novy component AuthGuard.tsx
       AuthGurad - 
       		novy komponent ktory pozre ci user je lognuti a potom ho redirektne pokial neni pozri - https://dev.to/tigawanna/auth-guarding-in-react-392o
	 	
-- Cvik poznamky
(do not steal)
