* Settings *
Documentation   04 - Properties Sort
...             As a customer, I want to be able to sort the properties by price, availability, date added, floor area, and lot area.
...             
...             By Bryan Camarillo
Suite Setup     Go Properties
Suite Teardown  Close Browser
Library         SeleniumLibrary

*** Test Cases ***
Test1
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  date-added
    Select From List By Value  id:low-high-first  lowest

Test2
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  date-added
    Select From List By Value  id:low-high-first  highest

Test3
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  availability
    Select From List By Value  id:low-high-first  lowest

Test4
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  availability
    Select From List By Value  id:low-high-first  highest

Test5
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  price
    Select From List By Value  id:low-high-first  highest

Test6
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  price
    Select From List By Value  id:low-high-first  lowest

Test7
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  floor-area
    Select From List By Value  id:low-high-first  highest

Test8
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  floor-area
    Select From List By Value  id:low-high-first  lowest

Test9
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  lot-area
    Select From List By Value  id:low-high-first  highest

Test10
    Wait Until Element Is Visible  id:sort-by
    Select From List By Value  id:sort-by  lot-area
    Select From List By Value  id:low-high-first  lowest

*** KEYWORDS ***
Go Properties
    Open Browser  https://buendia-estates-website.vercel.app/  chrome
    Maximize Browser Window
    Click Link  link:Properties