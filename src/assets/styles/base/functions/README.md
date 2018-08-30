# Base/Functions

## Table of Contents 
- [stripUnit](#stripunit)
- [calcUnit](#calcunit)
  - [em](#em)
  - [rem](#rem)
  - [px](#px)

## stripUnit
  คือ function ที่ไว้ตัดหน่วยต่างๆ ประกอบด้วย property
  - `$number` คือค่าที่เราต้องการตัดหน่วยออก
  
  ```scss
  css-property : stripUnit($number);
  
  // use function
  $number : stripUnit(8px); // $number: 8;
  width : 2px * $number; 

  // compiled to css
  width : 16px;
  ```

## calcUnit
### `em `

  คือ function ที่แปลงค่า px ให้เป็น em ประกอบด้วย property
  - `$pixel` คือค่าที่เราต้องการแปลงให้เป็นหน่วย em 
  - `$parentContext` คือค่า context ของ parent element โดยจะระบุค่าตั้งต้นเป็นค่าเดียวกับ `$browserContext--calc: 16!default` 

  ```scss
  css-property : em($pixel, $parentContext: $browserContext--calc);
  
  // use function
  width : em(16px);

  // compiled to css
  width : 1em;
  ```

### `rem`
  
  คือ function ที่แปลงค่า px ให้เป็น rem ประกอบด้วย property
  - `$pixel` คือค่าที่เราต้องการแปลงให้เป็นหน่วย em 
  - `$browserContext` คือค่า context ของ root html โดยจะระบุค่าตั้งต้นเท่ากับค่า `$browserContext--calc: 16!default`
  
  ```scss
  css-property : rem($pixel, $browserContext: $browserContext--calc);
  
  // use function
  width : rem(16px);

  // compiled to css
  width : 1rem;
  ```

### `px` 

  คือ function ที่แปลงค่า em หรือ rem ให้เป็น px ประกอบด้วย property 
  - `$pixel` คือค่าที่เราต้องการแปลงให้เป็นหน่วย em 
  - `$parentContext` คือค่า context ของ parent element โดยจะระบุค่าตั้งต้นเป็นค่าเดียวกับ `$browserContext--calc: 16!default` 
  - `$browserContext` คือค่า context ของ root html โดยจะระบุค่าตั้งต้นเท่ากับค่า `$browserContext--calc: 16!default`
  
  *** หากค่า context ของ parent element ไม่ใช่ค่าเดียวกับค่า context ของ root html จะต้องระบุค่า context ของ parent element ด้วยเสมอ
  
  ```scss
  css-property : rem($pixel, $browserContext: $browserContext--calc);
  
  // use function
  width : px(1em,20px);
  height : px(1rem);

  // compiled to css
  width : 20px
  height : 16px
  ```
