* Settings *
Documentation   08 - Contact Details
...             As a customer, I want to be able to see the contact details of the company
...             
...             By Bryan Camarillo
Suite Setup     Go Home
Suite Teardown  Close Browser
Library         SeleniumLibrary

*** Test Cases ***
Test1
    Click Link  link:Home
    SeleniumLibrary.Page Should Contain  lourdene_buendia@yahoo.com
    SeleniumLibrary.Page Should Contain  0918 337 1307

*** KEYWORDS ***
Go Home
    Open Browser  https://buendia-estates-website.vercel.app/  chrome
    Maximize Browser Window