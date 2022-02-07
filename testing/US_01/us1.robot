*** Settings ***
Documentation     Test suite for User Story #1
...               
...               These are test cases deals with going
...               to professor's page as an admin and 
...               adding a review.
...               
...               By James Andrew F. Perez
Suite Setup       Go Home
Suite Teardown    Close Browser

*** Test Cases ***
Valid
    Click Element   class:property-card

*** KEYWORDS ***
Go Home
    Go To   https://buendia-estates-website.vercel.app/
