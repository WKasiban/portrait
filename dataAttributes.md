<h1>Using data attributes</h1>
ใช้ขึ้นต้นว่า `data-*` 

<h2>HTML syntax</h2>
แค่ตั้งชื่อขึ้นต้นด้วย `data-*` ตรง * จะเป็นคำว่าอะไรก็ได้ ตัวอย่าง

```html
<article
    id='electric-cars'
    data-columns='3'
    data-parent='cars'>
    ........
</article>
```

<h2>JavaScript access</h2>
ใช้ JS อ่าน data attributes ด้วย `getAttribute()` หรือ `dataset` ดูตัวอย่าง
data values are strings. ต้องใส่เครื่องหมายคำพูด "" ในค่าของ data ถึงแม้ค่านั้นจะเป็นตัวเลขก็ตาม

```javascript
const article = document.querySelector('#electric-car');
article.dataset.columns // '3'
article.dataset.parent // 'cars'
```

<h2>CSS access</h2>
เรียกใช้ใน CSS ดูตัวอย่าง

```css
article::before {
    content: attr(data-parent);
}

/* สามารถเปลี่ยนสไตล์ของ css ให้ขึ้นอยู่กับข้อมูลของ data ได้ด้วย ดังตัวอย่าง */
article[data-columns='3'] {
    width: 400px;
}
article[data-columns='4'] {
    width: 600px;
}
```

<h2>Issues</h2>
Assistive technology may not access them. No useful for SEO.
some browser doesn't support `dataset` (under IE10) then have to use `getAttribute()` instead. 

