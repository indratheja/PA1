# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: startEndDate.spec.js >> start and End date selection
- Location: tests\startEndDate.spec.js:3:5

# Error details

```
ReferenceError: negative is not defined
```

# Page snapshot

```yaml
- generic [ref=e16]:
  - banner [ref=e17]:
    - generic [ref=e23]:
      - heading "Automation Testing Practice" [level=1] [ref=e25]
      - paragraph [ref=e27]: For Selenium, Cypress & Playwright
  - list [ref=e34]:
    - listitem [ref=e35]:
      - link "Home" [ref=e36] [cursor=pointer]:
        - /url: http://testautomationpractice.blogspot.com/
    - listitem [ref=e37]:
      - link "Udemy Courses" [ref=e38] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/#udemy
    - listitem [ref=e39]:
      - link "Online Trainings" [ref=e40] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/
    - listitem [ref=e41]:
      - link "Blog" [ref=e42] [cursor=pointer]:
        - /url: https://www.pavantestingtools.com/
    - listitem [ref=e43]:
      - link "PlaywrightPractice" [ref=e44] [cursor=pointer]:
        - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  - generic [ref=e48]:
    - generic:
      - generic [ref=e58]:
        - generic [ref=e59]:
          - generic [ref=e64]:
            - heading "Data Entry Form" [level=3] [ref=e65]:
              - link "Data Entry Form" [ref=e66] [cursor=pointer]:
                - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
            - generic [ref=e67]:
              - generic [ref=e68]:
                - generic [ref=e69]: "Name:"
                - textbox "Enter Name" [ref=e70]
                - generic [ref=e71]: "Email:"
                - textbox "Enter EMail" [ref=e72]
                - generic [ref=e73]: "Phone:"
                - textbox "Enter Phone" [ref=e74]
              - generic [ref=e75]:
                - generic [ref=e76]: "Address:"
                - textbox "Address:" [ref=e77]
              - generic [ref=e78]:
                - generic [ref=e79]: "Gender:"
                - generic [ref=e80]:
                  - radio "Male" [ref=e81]
                  - generic [ref=e82]: Male
                - generic [ref=e83]:
                  - radio "Female" [ref=e84]
                  - generic [ref=e85]: Female
              - generic [ref=e86]:
                - generic [ref=e87]: "Days:"
                - generic [ref=e88]:
                  - checkbox "Sunday" [ref=e89]
                  - generic [ref=e90]: Sunday
                - generic [ref=e91]:
                  - checkbox "Monday" [ref=e92]
                  - generic [ref=e93]: Monday
                - generic [ref=e94]:
                  - checkbox "Tuesday" [ref=e95]
                  - generic [ref=e96]: Tuesday
                - generic [ref=e97]:
                  - checkbox "Wednesday" [ref=e98]
                  - generic [ref=e99]: Wednesday
                - generic [ref=e100]:
                  - checkbox "Thursday" [ref=e101]
                  - generic [ref=e102]: Thursday
                - generic [ref=e103]:
                  - checkbox "Friday" [ref=e104]
                  - generic [ref=e105]: Friday
                - generic [ref=e106]:
                  - checkbox "Saturday" [ref=e107]
                  - generic [ref=e108]: Saturday
              - generic [ref=e109]:
                - generic [ref=e110]: "Country:"
                - combobox "Country:" [ref=e111]:
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
              - generic [ref=e112]:
                - generic [ref=e113]: "Colors:"
                - listbox "Colors:" [ref=e114]:
                  - option "Red" [ref=e115]
                  - option "Blue" [ref=e116]
                  - option "Green" [ref=e117]
                  - option "Yellow" [ref=e118]
                  - option "Red" [ref=e119]
                  - option "White" [ref=e120]
                  - option "Green" [ref=e121]
              - generic [ref=e122]:
                - generic [ref=e123]: "Sorted List:"
                - listbox "Sorted List:" [ref=e124]:
                  - option "Cat" [ref=e125]
                  - option "Cheetah" [ref=e126]
                  - option "Deer" [ref=e127]
                  - option "Dog" [ref=e128]
                  - option "Elephant" [ref=e129]
                  - option "Fox" [ref=e130]
                  - option "Giraffe" [ref=e131]
                  - option "Lion" [ref=e132]
                  - option "Rabbit" [ref=e133]
                  - option "Zebra" [ref=e134]
              - paragraph [ref=e135]:
                - text: "Date Picker 1 (mm/dd/yyyy):"
                - textbox [ref=e136]
              - paragraph [ref=e137]:
                - text: "Date Picker 2 (dd/mm/yyyy) :"
                - textbox [ref=e138]
              - generic [ref=e139]: "Date Picker 3: (Select a Date Range)"
              - generic [ref=e140]:
                - textbox [ref=e141]:
                  - /placeholder: Start Date
                  - text: 2026-01-10
                - generic [ref=e142]: to
                - textbox [ref=e143]:
                  - /placeholder: End Date
                  - text: 2026-01-08
                - button "Submit" [active] [ref=e144] [cursor=pointer]
              - generic [ref=e145]: End date must be after start date.
          - link "Home" [ref=e149] [cursor=pointer]:
            - /url: https://testautomationpractice.blogspot.com/
          - generic [ref=e151]:
            - text: "Subscribe to:"
            - link "Posts (Atom)" [ref=e152] [cursor=pointer]:
              - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
        - generic [ref=e153]:
          - heading "Upload Files" [level=2] [ref=e154]
          - generic [ref=e155]:
            - generic [ref=e156]:
              - button "Choose File" [ref=e157]
              - button "Upload Single File" [ref=e158] [cursor=pointer]
            - paragraph
            - generic [ref=e159]:
              - button "Choose File" [ref=e160]
              - button "Upload Multiple Files" [ref=e161] [cursor=pointer]
            - paragraph
        - generic [ref=e162]:
          - heading "Static Web Table" [level=2] [ref=e163]
          - table [ref=e165]:
            - rowgroup [ref=e166]:
              - row "BookName Author Subject Price" [ref=e167]:
                - columnheader "BookName" [ref=e168]
                - columnheader "Author" [ref=e169]
                - columnheader "Subject" [ref=e170]
                - columnheader "Price" [ref=e171]
              - row "Learn Selenium Amit Selenium 300" [ref=e172]:
                - cell "Learn Selenium" [ref=e173]
                - cell "Amit" [ref=e174]
                - cell "Selenium" [ref=e175]
                - cell "300" [ref=e176]
              - row "Learn Java Mukesh Java 500" [ref=e177]:
                - cell "Learn Java" [ref=e178]
                - cell "Mukesh" [ref=e179]
                - cell "Java" [ref=e180]
                - cell "500" [ref=e181]
              - row "Learn JS Animesh Javascript 300" [ref=e182]:
                - cell "Learn JS" [ref=e183]
                - cell "Animesh" [ref=e184]
                - cell "Javascript" [ref=e185]
                - cell "300" [ref=e186]
              - row "Master In Selenium Mukesh Selenium 3000" [ref=e187]:
                - cell "Master In Selenium" [ref=e188]
                - cell "Mukesh" [ref=e189]
                - cell "Selenium" [ref=e190]
                - cell "3000" [ref=e191]
              - row "Master In Java Amod JAVA 2000" [ref=e192]:
                - cell "Master In Java" [ref=e193]
                - cell "Amod" [ref=e194]
                - cell "JAVA" [ref=e195]
                - cell "2000" [ref=e196]
              - row "Master In JS Amit Javascript 1000" [ref=e197]:
                - cell "Master In JS" [ref=e198]
                - cell "Amit" [ref=e199]
                - cell "Javascript" [ref=e200]
                - cell "1000" [ref=e201]
        - generic [ref=e202]:
          - heading "Dynamic Web Table" [level=2] [ref=e203]
          - generic [ref=e204]:
            - table [ref=e205]:
              - rowgroup [ref=e206]:
                - row "Name Memory (MB) Disk (MB/s) Network (Mbps) CPU (%)" [ref=e207]:
                  - columnheader "Name" [ref=e208]
                  - columnheader "Memory (MB)" [ref=e209]
                  - columnheader "Disk (MB/s)" [ref=e210]
                  - columnheader "Network (Mbps)" [ref=e211]
                  - columnheader "CPU (%)" [ref=e212]
              - rowgroup [ref=e213]:
                - row "Internet Explorer 82.1 MB 0.21 MB/s 9.3 Mbps 7.8%" [ref=e214]:
                  - cell "Internet Explorer" [ref=e215]
                  - cell "82.1 MB" [ref=e216]
                  - cell "0.21 MB/s" [ref=e217]
                  - cell "9.3 Mbps" [ref=e218]
                  - cell "7.8%" [ref=e219]
                - row "Firefox 59.1 MB 0.53 MB/s 6.5 Mbps 5.5%" [ref=e220]:
                  - cell "Firefox" [ref=e221]
                  - cell "59.1 MB" [ref=e222]
                  - cell "0.53 MB/s" [ref=e223]
                  - cell "6.5 Mbps" [ref=e224]
                  - cell "5.5%" [ref=e225]
                - row "System 71.5 MB 0.05 MB/s 6.0 Mbps 0.7%" [ref=e226]:
                  - cell "System" [ref=e227]
                  - cell "71.5 MB" [ref=e228]
                  - cell "0.05 MB/s" [ref=e229]
                  - cell "6.0 Mbps" [ref=e230]
                  - cell "0.7%" [ref=e231]
                - row "Chrome 76.7 MB 0.56 MB/s 7.3 Mbps 1.5%" [ref=e232]:
                  - cell "Chrome" [ref=e233]
                  - cell "76.7 MB" [ref=e234]
                  - cell "0.56 MB/s" [ref=e235]
                  - cell "7.3 Mbps" [ref=e236]
                  - cell "1.5%" [ref=e237]
            - generic [ref=e238]:
              - paragraph [ref=e239]:
                - text: "CPU load of Chrome process:"
                - strong [ref=e240]: 1.5%
              - paragraph [ref=e241]:
                - text: "Memory Size of Firefox process:"
                - strong [ref=e242]: 59.1 MB
              - paragraph [ref=e243]:
                - text: "Network speed of Chrome process:"
                - strong [ref=e244]: 7.3 Mbps
              - paragraph [ref=e245]:
                - text: "Disk space of Firefox process:"
                - strong [ref=e246]: 0.53 MB/s
        - generic [ref=e247]:
          - heading "Pagination Web Table" [level=2] [ref=e248]
          - generic [ref=e250]:
            - table [ref=e251]:
              - rowgroup [ref=e252]:
                - row "ID Name Price Select" [ref=e253]:
                  - columnheader "ID" [ref=e254]
                  - columnheader "Name" [ref=e255]
                  - columnheader "Price" [ref=e256]
                  - columnheader "Select" [ref=e257]
              - rowgroup [ref=e258]:
                - row "1 Smartphone $10.99" [ref=e259]:
                  - cell "1" [ref=e260]
                  - cell "Smartphone" [ref=e261]
                  - cell "$10.99" [ref=e262]
                  - cell [ref=e263]:
                    - checkbox [ref=e264]
                - row "2 Laptop $19.99" [ref=e265]:
                  - cell "2" [ref=e266]
                  - cell "Laptop" [ref=e267]
                  - cell "$19.99" [ref=e268]
                  - cell [ref=e269]:
                    - checkbox [ref=e270]
                - row "3 Tablet $5.99" [ref=e271]:
                  - cell "3" [ref=e272]
                  - cell "Tablet" [ref=e273]
                  - cell "$5.99" [ref=e274]
                  - cell [ref=e275]:
                    - checkbox [ref=e276]
                - row "4 Smartwatch $7.99" [ref=e277]:
                  - cell "4" [ref=e278]
                  - cell "Smartwatch" [ref=e279]
                  - cell "$7.99" [ref=e280]
                  - cell [ref=e281]:
                    - checkbox [ref=e282]
                - row "5 Wireless Earbuds $8.99" [ref=e283]:
                  - cell "5" [ref=e284]
                  - cell "Wireless Earbuds" [ref=e285]
                  - cell "$8.99" [ref=e286]
                  - cell [ref=e287]:
                    - checkbox [ref=e288]
            - list [ref=e289]:
              - listitem [ref=e290]:
                - link "1" [ref=e291] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e292]:
                - link "2" [ref=e293] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e294]:
                - link "3" [ref=e295] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e296]:
                - link "4" [ref=e297] [cursor=pointer]:
                  - /url: "#"
      - generic:
        - generic:
          - complementary
      - complementary [ref=e300]:
        - generic [ref=e301]:
          - generic [ref=e302]:
            - heading "Tabs" [level=2] [ref=e303]
            - generic [ref=e306]:
              - link [ref=e308] [cursor=pointer]:
                - /url: https://wikipedia.org/wiki/
                - img [ref=e309]
              - generic [ref=e310]:
                - textbox [ref=e312]
                - button "Submit" [ref=e314] [cursor=pointer]
          - generic [ref=e316]:
            - heading "Dynamic Button" [level=2] [ref=e317]
            - button "START" [ref=e319] [cursor=pointer]
          - generic [ref=e320]:
            - heading "Alerts & Popups" [level=2] [ref=e321]
            - generic [ref=e322]:
              - button "Simple Alert" [ref=e323] [cursor=pointer]
              - button "Confirmation Alert" [ref=e324] [cursor=pointer]
              - button "Prompt Alert" [ref=e325] [cursor=pointer]
              - paragraph
          - button "New Tab" [ref=e328] [cursor=pointer]
          - button "Popup Windows" [ref=e333] [cursor=pointer]
          - generic [ref=e334]:
            - heading "Mouse Hover" [level=2] [ref=e335]
            - generic [ref=e336]:
              - paragraph [ref=e337]: Move the mouse over the button to open the dropdown menu.
              - button "Point Me" [ref=e339] [cursor=pointer]
          - generic [ref=e340]:
            - heading "Double Click" [level=2] [ref=e341]
            - generic [ref=e342]:
              - text: "Field1:"
              - textbox [ref=e343]: Hello World!
              - text: "Field2:"
              - textbox [ref=e344]
              - button "Copy Text" [ref=e345] [cursor=pointer]
              - paragraph [ref=e346]: Double click on button, the text from Field1 will be copied into Field2.
          - generic [ref=e347]:
            - heading "Drag and Drop" [level=2] [ref=e348]
            - generic:
              - paragraph [ref=e350]: Drag me to my target
              - paragraph [ref=e352]: Drop here
          - generic [ref=e353]:
            - heading "Slider" [level=2] [ref=e354]
            - paragraph [ref=e356]:
              - generic [ref=e357]: "Price range:"
              - textbox "Price range:" [ref=e358]: $75 - $300
          - generic [ref=e363]:
            - heading "SVG Elements" [level=2] [ref=e364]
            - generic [ref=e366]:
              - img [ref=e367]
              - img [ref=e369]
              - img [ref=e371]
          - generic [ref=e373]:
            - heading "Scrolling DropDown" [level=2] [ref=e374]
            - textbox "Select an item" [ref=e376]
          - generic [ref=e377]:
            - heading "Labels And Links" [level=2] [ref=e378]
            - generic [ref=e380]:
              - generic [ref=e381]:
                - heading "Mobile Labels" [level=4] [ref=e382]
                - generic [ref=e383]: Samsung
                - generic [ref=e384]: Real Me
                - generic [ref=e385]: Moto
              - generic [ref=e386]:
                - heading "Laptop Links" [level=4] [ref=e387]
                - link "Apple" [ref=e388] [cursor=pointer]:
                  - /url: https://www.apple.com/
                - link "Lenovo" [ref=e389] [cursor=pointer]:
                  - /url: https://www.lenovo.com/
                - link "Dell" [ref=e390] [cursor=pointer]:
                  - /url: https://www.dell.com/
              - generic [ref=e391]:
                - heading "Broken Links" [level=4] [ref=e392]
                - link "Errorcode 400" [ref=e393] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=400
                - link "Errorcode 401" [ref=e394] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=401
                - link "Errorcode 403" [ref=e395] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=403
                - link "Errorcode 404" [ref=e396] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=404
                - link "Errorcode 408" [ref=e397] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=408
                - link "Errorcode 500" [ref=e398] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=500
                - link "Errorcode 502" [ref=e399] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=502
                - link "Errorcode 503" [ref=e400] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=503
          - heading "Visitors" [level=2] [ref=e402]
  - contentinfo [ref=e403]:
    - generic [ref=e406]:
      - table [ref=e407]:
        - rowgroup [ref=e408]:
          - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=e409]:
            - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files" [ref=e410]:
              - generic [ref=e411]:
                - generic [ref=e412]:
                  - heading "Form" [level=2] [ref=e413]
                  - generic [ref=e415]:
                    - generic [ref=e416]:
                      - heading "Section 1" [level=4] [ref=e417]
                      - paragraph [ref=e418]: This is a paragraph in Section 1.
                      - textbox [ref=e419]
                      - button "Submit" [ref=e420] [cursor=pointer]
                    - generic [ref=e421]:
                      - heading "Section 2" [level=4] [ref=e422]
                      - paragraph [ref=e423]: This is a paragraph in Section 2.
                      - textbox [ref=e424]
                      - button "Submit" [ref=e425] [cursor=pointer]
                    - generic [ref=e426]:
                      - heading "Section 3" [level=4] [ref=e427]
                      - paragraph [ref=e428]: This is a paragraph in Section 3.
                      - textbox [ref=e429]
                      - button "Submit" [ref=e430] [cursor=pointer]
                - generic [ref=e431]:
                  - heading "Footer Links" [level=2] [ref=e432]
                  - list [ref=e434]:
                    - listitem [ref=e435]:
                      - link "Home" [ref=e436] [cursor=pointer]:
                        - /url: http://testautomationpractice.blogspot.com/
                    - listitem [ref=e437]:
                      - link "Hidden Elements & AJAX" [ref=e438] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
                    - listitem [ref=e439]:
                      - link "Download Files" [ref=e440] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
            - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=e441]:
              - generic [ref=e443]:
                - heading "ShadowDOM" [level=2] [ref=e444]
                - generic [ref=e445]:
                  - generic [ref=e446]:
                    - generic [ref=e447]: Mobiles
                    - generic [ref=e450]: Laptops
                    - link "Blog" [ref=e451] [cursor=pointer]:
                      - /url: https://www.pavantestingtools.com/
                    - textbox [ref=e452]
                    - checkbox [ref=e453]
                    - button "Choose File" [ref=e454]
                  - link "Youtube" [ref=e455] [cursor=pointer]:
                    - /url: https://www.youtube.com/@sdetpavan/videos
      - generic [ref=e458]:
        - text: Theme images by
        - link "merrymoonmary" [ref=e459] [cursor=pointer]:
          - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
        - text: . Powered by
        - link "Blogger" [ref=e460] [cursor=pointer]:
          - /url: https://www.blogger.com
        - text: .
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | 
  3  | test("start and End date selection", async ({ page }) => {
  4  |     await page.goto("https://testautomationpractice.blogspot.com/");
  5  |     await page.locator('#start-date').click();
  6  |     const startDate = await page.locator('#start-date').fill("2026-01-10");
  7  |     await page.locator('#end-date').click();
  8  |     const endDate = await page.locator('#end-date').fill("2026-01-08");
  9  |     console.log(startDate);
  10 |     console.log(endDate);
  11 |     //await page.getByRole('button', {name: 'Submit'}).click();
  12 |     await page.locator('.submit-btn').click();
  13 |     const actual = await page.locator("#result").textContent();
> 14 |     negative = "End date must be after start date.";
     |             ^ ReferenceError: negative is not defined
  15 |     isequal = "You selected a range of 0 days."
  16 | 
  17 |     if (startDate > endDate) {
  18 |         await expect(actual).toContain(negative)
  19 |     } else if (startDate === endDate) {
  20 |         await expect(actual).toContain(isequal);
  21 |     } else if (startDate < endDate) {
  22 |         console.log(actual);
  23 |     }
  24 | 
  25 | 
  26 | 
  27 | 
  28 | })
  29 | 
```