# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alllocators.spec.js >> TC1: Verify page title loads correctly
- Location: tests\alllocators.spec.js:9:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /test automation/i
Received string:  "Automation Testing Practice"
Timeout: 30000ms

Call log:
  - Expect "toHaveTitle" with timeout 30000ms
    60 × unexpected value "Automation Testing Practice"

```

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/#udemy
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "Data Entry Form" [level=3]:
  - link "Data Entry Form":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox:
  - /placeholder: Start Date
- text: to
- textbox:
  - /placeholder: End Date
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - columnheader "BookName"
      - columnheader "Author"
      - columnheader "Subject"
      - columnheader "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name Network (Mbps) CPU (%) Memory (MB) Disk (MB/s)":
      - columnheader "Name"
      - columnheader "Network (Mbps)"
      - columnheader "CPU (%)"
      - columnheader "Memory (MB)"
      - columnheader "Disk (MB/s)"
  - rowgroup:
    - row "Internet Explorer 2.9 Mbps 9.1% 68.0 MB 0.48 MB/s":
      - cell "Internet Explorer"
      - cell "2.9 Mbps"
      - cell "9.1%"
      - cell "68.0 MB"
      - cell "0.48 MB/s"
    - row "Chrome 1.5 Mbps 1.4% 99.5 MB 0.11 MB/s":
      - cell "Chrome"
      - cell "1.5 Mbps"
      - cell "1.4%"
      - cell "99.5 MB"
      - cell "0.11 MB/s"
    - row "System 8.1 Mbps 4.1% 50.4 MB 0.46 MB/s":
      - cell "System"
      - cell "8.1 Mbps"
      - cell "4.1%"
      - cell "50.4 MB"
      - cell "0.46 MB/s"
    - row "Firefox 8.6 Mbps 9.6% 90.9 MB 0.14 MB/s":
      - cell "Firefox"
      - cell "8.6 Mbps"
      - cell "9.6%"
      - cell "90.9 MB"
      - cell "0.14 MB/s"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 1.4%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 90.9 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 1.5 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.14 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - columnheader "ID"
      - columnheader "Name"
      - columnheader "Price"
      - columnheader "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - columnheader
        - columnheader
    - rowgroup:
      - row "0 57":
        - cell "0"
        - cell "57"
      - row "1 91":
        - cell "1"
        - cell "91"
      - row "2 100":
        - cell "2"
        - cell "100"
      - row "3 89":
        - cell "3"
        - cell "89"
      - row "4 80":
        - cell "4"
        - cell "80"
      - row "5 69":
        - cell "5"
        - cell "69"
      - row "6 56":
        - cell "6"
        - cell "56"
      - row "7 57":
        - cell "7"
        - cell "57"
      - row "8 93":
        - cell "8"
        - cell "93"
      - row "9 88":
        - cell "9"
        - cell "88"
      - row "10 89":
        - cell "10"
        - cell "89"
      - row "11 85":
        - cell "11"
        - cell "85"
      - row "12 66":
        - cell "12"
        - cell "66"
      - row "13 51":
        - cell "13"
        - cell "51"
      - row "14 53":
        - cell "14"
        - cell "53"
      - row "15 86":
        - cell "15"
        - cell "86"
      - row "16 93":
        - cell "16"
        - cell "93"
      - row "17 83":
        - cell "17"
        - cell "83"
      - row "18 86":
        - cell "18"
        - cell "86"
      - row "19 69":
        - cell "19"
        - cell "69"
      - row "20 60":
        - cell "20"
        - cell "60"
      - row "21 54":
        - cell "21"
        - cell "54"
      - row "22 82":
        - cell "22"
        - cell "82"
      - row "23 84":
        - cell "23"
        - cell "84"
      - row "24 96":
        - cell "24"
        - cell "96"
      - row "25 84":
        - cell "25"
        - cell "84"
      - row "26 82":
        - cell "26"
        - cell "82"
      - row "27 67":
        - cell "27"
        - cell "67"
      - row "28 57":
        - cell "28"
        - cell "57"
      - row "29 61":
        - cell "29"
        - cell "61"
  - text: 8,337,859
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

# Test source

```ts
  1   | import { expect, test } from "@playwright/test"
  2   | import { acceptAllDialogs } from "../utils/createDialog"
  3   | 
  4   | test.beforeEach(async ({ page }) => {
  5   |     await page.goto("https://testautomationpractice.blogspot.com/");
> 6   |     await expect(page).toHaveTitle(/test automation/i);
      |                        ^ Error: expect(page).toHaveTitle(expected) failed
  7   | })
  8   | 
  9   | test('TC1: Verify page title loads correctly', async ({ page }) => {
  10  |     await expect(page).toHaveTitle(/test automation/i);
  11  | })
  12  | 
  13  | test('TC2: Verify Sunday checkbox can be checked', async ({ page }) => {
  14  |     const sundayCheckbox = page.getByRole('checkbox', { name: 'Sunday' });
  15  |     await sundayCheckbox.check();
  16  |     await expect(sundayCheckbox).toBeChecked();
  17  |     await page.screenshot({ path: 'Screenshots/indra.png' });
  18  | })
  19  | 
  20  | test('TC3: Verify Monday checkbox can be checked', async ({ page }) => {
  21  |     const mondayCheckbox = page.getByRole('checkbox', { name: 'Monday' });
  22  |     await mondayCheckbox.check();
  23  |     await expect(mondayCheckbox).toBeChecked();
  24  |     await mondayCheckbox.screenshot({ path: 'Screenshots/checkbox.jpeg' });
  25  | })
  26  | 
  27  | test('TC4: Verify Male radio button can be selected', async ({ page }) => {
  28  |     const maleRadio = page.getByRole('radio', { name: 'Male', exact: true });
  29  |     await maleRadio.click();
  30  |     await expect(maleRadio).toBeChecked();
  31  | })
  32  | 
  33  | test('TC5: Verify Home text is visible on page', async ({ page }) => {
  34  |     const homeText = page.getByText('Home').first();
  35  |     await expect(homeText).toBeVisible();
  36  |     console.log(await homeText.textContent());
  37  | })
  38  | 
  39  | test('TC6: Verify phone number can be entered in input field', async ({ page }) => {
  40  |     const phoneInput = page.getByPlaceholder('Enter Phone');
  41  |     await phoneInput.fill('9916910404');
  42  |     await expect(phoneInput).toHaveValue('9916910404');
  43  | })
  44  | 
  45  | test('TC7: Verify dynamic button state changes when clicked', async ({ page }) => {
  46  |     const dynamicBtn = page.locator("//button[@onclick='toggleButton(this)']");
  47  |     await dynamicBtn.click();
  48  |     await expect(dynamicBtn).toHaveText("STOP");
  49  |     console.log(await dynamicBtn.textContent());
  50  | })
  51  | 
  52  | test('TC8: Verify alert button is enabled and can be clicked', async ({ page }) => {
  53  |     acceptAllDialogs(page);
  54  |     const alertBtn = page.locator('#alertBtn');
  55  |     await expect(alertBtn).toBeEnabled();
  56  |     await alertBtn.click();
  57  | })
  58  | 
  59  | test('TC9: Verify confirm button is enabled and can be clicked', async ({ page }) => {
  60  |     acceptAllDialogs(page);
  61  |     const confirmBtn = page.locator("#confirmBtn");
  62  |     await expect(confirmBtn).toBeEnabled();
  63  |     await confirmBtn.click();
  64  | })
  65  | 
  66  | test('TC10: Verify New Tab button opens a new page', async ({ browser, page }) => {
  67  |     const context = page.context();
  68  |     const newwindow = page.getByRole('button', { name: 'New Tab' });
  69  |     await expect(newwindow).toBeVisible();
  70  | 
  71  |     const [newpage] = await Promise.all([
  72  |         context.waitForEvent('page'),
  73  |         newwindow.click(),
  74  |     ])
  75  |     
  76  |     await expect(newpage).not.toBe(null);
  77  | })
  78  | 
  79  | test('TC11: Verify TypeScript link is visible and clickable on new page', async ({ browser, page }) => {
  80  |     const context = page.context();
  81  |     const newwindow = page.getByRole('button', { name: 'New Tab' });
  82  | 
  83  |     const [newpage] = await Promise.all([
  84  |         context.waitForEvent('page'),
  85  |         newwindow.click(),
  86  |     ])
  87  |     
  88  |     const typescriptLink = newpage.locator("//a[normalize-space()='TypeScript For Playwright & Cypress']");
  89  |     await expect(typescriptLink).toBeVisible();
  90  |     await typescriptLink.click();
  91  | })
  92  | 
  93  | test('TC12: Verify Popup Windows button is visible and clickable', async ({ page }) => {
  94  |     const popupBtn = page.getByRole('button', { name: /Popup Windows/i });
  95  |     await expect(popupBtn).toBeVisible();
  96  |     await popupBtn.click();
  97  | })
  98  | 
  99  | test('TC13: Verify Point Me button is visible and clickable', async ({ page }) => {
  100 |     const pointBtn = page.getByRole('button', { name: 'Point Me' });
  101 |     await expect(pointBtn).toBeVisible();
  102 |     await pointBtn.click();
  103 | })
  104 | 
  105 | test('TC14: Verify Laptops link is visible and clickable', async ({ page }) => {
  106 |     const laptopsLink = page.getByRole('link', { name: 'Laptops' });
```