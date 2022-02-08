* Settings *
Documentation   06 - Sell a Property
...             As a customer, I want to be able to sell my properties.
...             
...             By Bryan Camarillo
Suite Setup     Go Sell
Suite Teardown  Close Browser
Library         SeleniumLibrary

*** Test Cases ***
Test1
    Initialize
    Input Text  id:selling-price  -1  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test2
    Initialize
    Input Text  id:selling-price  0  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test3
    Initialize
    Input Text  id:maps-link  waze  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test4
    Initialize
    Input Text  id:zip-code  abc  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test5
    Initialize
    Input Text  id:floor-area  -1  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test6
    Initialize
    Input Text  id:floor-area  0  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test7
    Initialize
    Input Text  id:lot-area  -1  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test8
    Initialize
    Input Text  id:lot-area  0  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test9
    Initialize
    Input Text  id:toilet-and-bath  -1  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test10
    Initialize
    Input Text  id:bedrooms  -1  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test11
    Initialize
    Input Text  id:property-age  -1  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test12
    Initialize
    Input Text  id:brokers-fee  -1  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test13
    Initialize
    Input Text  id:brokers-fee  0  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test14
    Initialize
    Input Text  id:phone-num  09123456789  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test15
    Initialize
    Input Text  id:email  johndoe  clear=True
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

Test16
    Initialize
    Clear Element Text  id:email
    Submit Form  id:sellForm
    SeleniumLibrary.Page Should Not Contain  Message Sent

*** KEYWORDS ***
Go Sell
    Open Browser  https://buendia-estates-website.vercel.app/  chrome
    Maximize Browser Window
    Click Link  link:Sell a Property
Initialize
    Input Text  id:selling-price  100  clear=True
    Input Text  id:street-address  Street  clear=True
    Input Text  id:city  City  clear=True
    Input Text  id:region  Region  clear=True
    Input Text  id:zip-code  1000  clear=True
    Input Text  id:maps-link  https://www.google.com/  clear=True
    Input Text  id:floor-area  10  clear=True
    Input Text  id:lot-area  10  clear=True
    Input Text  id:bedrooms  2  clear=True
    Input Text  id:toilet-and-bath  2  clear=True
    Input Text  id:sellproperties_areaText1__qdj0R  None  clear=True
    Input Text  id:property-age  2  clear=True
    Input Text  id:inclusions  2  clear=True
    Select From List By Value  id:title  tct
    Input Text  id:title-status  None  clear=True
    Input Text  id:brokers-fee  100  clear=True
    Input Text  id:ownerfName  John  clear=True
    Input Text  id:ownerlName  Doe  clear=True
    Input Text  id:phone-num  +631234567890  clear=True
    Input Text  id:email  johndoe@gmail.com  clear=True
    Input Text  id:sellproperties_areaText2__AepD4  None  clear=True
    Choose File  id:pictures  C:\\Users\\Bryan\\Documents\\College Files\\References\\Website\\buendia-estates-website