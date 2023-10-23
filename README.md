# QRCode_Generator
A backend based QR Code generator application.
I created this application to practice, how to use external node packages to create a feature or an application.
This a completely backend based application in which it takes input from user (as a URL) and convert that url into a png image using node package 
and saves it to local system using another node package called as file system (fs).
Node packages used in this application are 1) inquirer (which takes inputs from the user), 2) qr-image (which generates a QR code image from the given url) and 
3) file system (which stores that QR image to local system in png format and also saves the user's input url as a text file).
