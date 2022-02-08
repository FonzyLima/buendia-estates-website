* Settings *
Documentation   03 - Properties Filter
...             As a customer, I want to be able to filter the properties by location, property type, and price range.
...             
...             By Bryan Camarillo
Suite Setup     Go Properties
Suite Teardown  Close Browser
Library         SeleniumLibrary

*** Test Cases ***
Test1 # Properties Page is filterable by location (Any)
    Wait Until Element Is Visible  id:location
    Click Element  id:location
    Select From List By Value  id:location  any
    Click Button  class:Home_btn-search__nhjqf
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Modern Townhouse in Taguig City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Empty Lot in Quezon City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Cozy House in Mandaluyong City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Alder Residences Taguig City']

Test2
    Wait Until Element Is Visible  id:location
    Click Element  id:location
    Select From List By Value  id:location  Mandaluyong City
    Click Button  class:Home_btn-search__nhjqf
    Element Should Not Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']

Test3
    Wait Until Element Is Visible  id:location
    Click Element  id:location
    Select From List By Value  id:location  Pasay City
    Click Button  class:Home_btn-search__nhjqf
    Element Should Not Be Visible  xpath://*[@class='property-card']//*[text()='Modern Townhouse in Taguig City']

Test4
    Wait Until Element Is Visible  id:location
    Click Element  id:location
    Select From List By Value  id:location  Quezon City
    Click Button  class:Home_btn-search__nhjqf
    Element Should Not Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']

Test5
    Wait Until Element Is Visible  id:location
    Click Element  id:location
    Select From List By Value  id:location  Taguig City
    Click Button  class:Home_btn-search__nhjqf
    Element Should Not Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']

Test6
    Wait Until Element Is Visible  id:location
    Click Element  id:location
    Select From List By Value  id:location  any
    Wait Until Element Is Visible  id:propertytype
    Click Element  id:propertytype
    Select From List By Value  id:propertytype  any
    Click Button  class:Home_btn-search__nhjqf
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Modern Townhouse in Taguig City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Empty Lot in Quezon City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Cozy House in Mandaluyong City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Alder Residences Taguig City']

Test7
    Wait Until Element Is Visible  id:propertytype
    Click Element  id:propertytype
    Select From List By Value  id:propertytype  Commercial Property
    Click Button  class:Home_btn-search__nhjqf
    Element Should Not Be Visible  xpath://*[@class='property-card']//*[text()='Modern Townhouse in Taguig City']

Test8
    Wait Until Element Is Visible  id:propertytype
    Click Element  id:propertytype
    Select From List By Value  id:propertytype  Condominium
    Click Button  class:Home_btn-search__nhjqf
    Element Should Not Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']

Test9
    Wait Until Element Is Visible  id:propertytype
    Click Element  id:propertytype
    Select From List By Value  id:propertytype  Empty Lot
    Click Button  class:Home_btn-search__nhjqf
    Element Should Not Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']

Test10
    Wait Until Element Is Visible  id:propertytype
    Click Element  id:propertytype
    Select From List By Value  id:propertytype  Single Detached
    Click Button  class:Home_btn-search__nhjqf
    Element Should Not Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']

Test11
    Wait Until Element Is Visible  id:propertytype
    Click Element  id:propertytype
    Select From List By Value  id:propertytype  Townhouse
    Click Button  class:Home_btn-search__nhjqf
    Element Should Not Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']

Test12
    Wait Until Element Is Visible  id:location
    Click Element  id:location
    Select From List By Value  id:location  any
    Wait Until Element Is Visible  id:propertytype
    Click Element  id:propertytype
    Select From List By Value  id:propertytype  any
    Click Element  id:pr-minval
    Press Keys  id:pr-minval  0
    Click Element  id:pr-maxval
    Press Keys  pr-maxval  100000000
    Click Button  class:Home_btn-search__nhjqf
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Modern Townhouse in Taguig City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Empty Lot in Quezon City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Cozy House in Mandaluyong City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Alder Residences Taguig City']

Test13
    Click Element  id:pr-minval
    Press Keys  id:pr-minval  -10000
    Click Element  id:pr-maxval
    Press Keys  id:pr-maxval  100000000
    Click Button  class:Home_btn-search__nhjqf
    SeleniumLibrary.Page Should Contain  Error

Test14
    Click Element  id:pr-minval
    Press Keys  id:pr-minval  100000000
    Click Element  id:pr-maxval
    Press Keys  id:pr-maxval  0
    Click Button  class:Home_btn-search__nhjqf
    SeleniumLibrary.Page Should Contain  Error

Test15
    Click Element  id:pr-minval
    Press Keys  id:pr-minval  100000000
    Click Element  id:pr-maxval
    Press Keys  id:pr-maxval  -10000
    Click Button  class:Home_btn-search__nhjqf
    SeleniumLibrary.Page Should Contain  Error

Test16
    Click Button  class:Home_btn-clear__0sfG5
    Click Button  class:Home_btn-search__nhjqf
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Modern Commercial Property in Pasay City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Modern Townhouse in Taguig City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Empty Lot in Quezon City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Cozy House in Mandaluyong City']
    Element Should Be Visible  xpath://*[@class='property-card']//*[text()='Alder Residences Taguig City']

*** KEYWORDS ***
Go Properties
    Open Browser  https://buendia-estates-website.vercel.app/  chrome
    Maximize Browser Window
    Click Link  link:Properties