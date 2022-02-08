* Settings *
Documentation   01 - Home Page
...             As a customer, I want to be able to see the home page of the website, featuring properties, information about selling properties, and customer reviews.
...             
...             By Bryan Camarillo
Suite Setup     Go Home
Suite Teardown  Close Browser
Library         SeleniumLibrary

*** Test Cases ***
Test1 # Home Page is Accessible
    Click Link  link:Home

*** KEYWORDS ***
Go Home
    Open Browser  https://buendia-estates-website.vercel.app/  chrome
    Maximize Browser Window