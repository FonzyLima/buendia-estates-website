* Settings *
Documentation   05 - Properties Specific Page
...             As a customer, I want to be able to view specific property pages.
...             
...             By Bryan Camarillo
Suite Setup     Setup
Suite Teardown  Close Browser
Library         SeleniumLibrary

*** Test Cases ***
Test1
    Click Link  link:Home
    Wait Until Element Is Visible  xpath://*[@class='property-card']//*[text()='Alder Residences Taguig City']
    Go To  https://buendia-estates-website.vercel.app/properties/alder-residences-2-br
    SeleniumLibrary.Page Should Contain  Home Features

Test2
    Click Link  link:Properties
    Wait Until Element Is Visible  xpath://*[@class='property-card']//*[text()='Modern Townhouse in Taguig City']
    Go To  https://buendia-estates-website.vercel.app/properties/modern-townhouse-in-taguig-city
    SeleniumLibrary.Page Should Contain  Home Features

Test3
    Go To  https://buendia-estates-website.vercel.app/properties/cozy-house-in-mandaluyong-city
    Sleep  5s
    SeleniumLibrary.Page Should Contain  Home Features

*** KEYWORDS ***
Setup
    Open Browser  https://buendia-estates-website.vercel.app/  chrome
    Maximize Browser Window