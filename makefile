#all funcs

#run hugo server
hugo:
	hugo server --disableFastRender


#Run Tailwind build with npx. Find unprocessed.css and output styles.css
build:
	make sync
	npx tailwindcss -i static/css/unprocessed.css -o static/css/styles.css --watch


sync:
	git pull origin main
