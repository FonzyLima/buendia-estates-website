* Settings *
Documentation   07 - Book a Viewing
...             As a customer, I want to be able to book a viewing.
...             
...             By Bryan Camarillo
Suite Setup     Go Book
Suite Teardown  Close Browser
Library         SeleniumLibrary

*** Test Cases ***
Test1
    Wait Until Element Is Visible  id:prefLocation
    Press Keys  id:prefLocation  Pasay City
    Wait Until Element Is Visible  xpath://*[text()='Submit Booking']
    Click Button  xpath://*[text()='Submit Booking']
    SeleniumLibrary.Page Should Not Contain  Booking Placed

Test2
    Press Keys  id:prefPropType  Condominium
    Press Keys  id:yourName  John Doe
    Press Keys  id:firstName  notjohndoe
    Press Keys  id:lastName  johndoe
    Press Keys  id:Age  21
    Press Keys  id:Gender  Male
    Press Keys  id:Occupation  Architect
    Press Keys  id:prefSched  03032022
    Press Keys  id:addNotes  N/A
    Click Button  xpath://*[text()='Submit Booking']
    SeleniumLibrary.Page Should Not Contain  Booking Placed

Test3
    Clear Element Text  id:lastName
    Press Keys  id:lastName  johndoe@gmail.com
    Press Keys  id:prefSched  01012022
    Click Button  xpath://*[text()='Submit Booking']
    SeleniumLibrary.Page Should Not Contain  Booking Placed

Test4
    Sleep  10s
    Press Keys  id:prefLocation  Pasay City
    Press Keys  id:prefPropType  Condominium
    Press Keys  id:yourName  John Doe
    Press Keys  id:firstName  notjohndoe
    Press Keys  id:lastName  johndoe
    Press Keys  id:Gender  Male
    Press Keys  id:Occupation  Architect
    Press Keys  id:prefSched  03032022
    Press Keys  id:addNotes  N/A
    Clear Element Text  id:Age
    Press Keys  id:Age  -1
    Click Button  xpath://*[text()='Submit Booking']
    SeleniumLibrary.Page Should Not Contain  Booking Placed

Test5
    Sleep  3s
    Clear Element Text  id:Age
    Press Keys  id:Age  0
    Click Button  xpath://*[text()='Submit Booking']
    SeleniumLibrary.Page Should Not Contain  Booking Placed

*** KEYWORDS ***
Go Book
    Open Browser  https://buendia-estates-website.vercel.app/  chrome
    Maximize Browser Window
    Click Link  link:Book A Viewing