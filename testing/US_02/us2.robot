* Settings *
Documentation   02 - Properties Page
...             As a customer, I want to be able to go the properties page and see all the properties that are being sold.
...             
...             By Bryan Camarillo
Suite Setup     Go Properties
Suite Teardown  Close Browser
Library         SeleniumLibrary

*** Test Cases ***
Test1 # Properties Page is Accessible
    Click Link  link:Properties

*** KEYWORDS ***
Go Properties
    Open Browser  https://buendia-estates-website.vercel.app/  chrome
    Maximize Browser Window