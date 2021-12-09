<h1>Intersection Observer API</h1>

ในอดีต เวลาต้องการ detect scroll จะต้องใช้เทคนิคเช่น 
- Lazy-loading 
- 'infinite scrolling' web site 
- reporting of visibility of advertisements in order to calculate ad revenues
- ตัดสินในว่า จะใช้ animation process หรือไม่ โดยขึ้นอยู่กับว่า ผู้ใช้จะเห็นผลลัพธ์หรือไม่

ในอดีตใช้ `Element.getBoundingClientRect()` 

Intersection Observer API ใช้ callback function that is executed whenever and element they wish to monitor enters or exits another element (or the viewport), or when the amount by which the two intersect changes by a requested amount. 

One thing the Intersection Observer API can't tell --> the exact number of pixels that overlap or specifically which ones they are.


<h2>Intersection observer concepts and usage</h2>

เรียก callback function เมื่อ
- A target element เรียกว่า root element หรือ root
- the first time the observer is initially asked to watch a target element. 

The degree of intersection between the target element and its root is the intersection ratio. แสดงเปอร์เซ็นต์ ของ target element ที่ปรากฎ มีค่าระหว่าง 0.0 and 1.0

<h3>Creating an intersection observer</h3>

```javascript
let obtions = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
```

`threshold: 1.0` = ถ้ามองเห็น 100% ของเป้าหมาย target ฟังชั่น callback จะถูกเรียกใช้

------------
<h1>Lazy loading using the Intersection Observer API</h1>
by Leonardo Maldonado at https://blog.logrocket.com/lazy-loading-using-the-intersection-observer-api/

ใน react ใช้เทคนิค code splitting --> https://blog.logrocket.com/code-splitting-in-react-an-overview/ สำหรับทำ lazy loading

<h2>Using the Intersection Observer API</h2>
The Intersection Observer API provides a way to observe changes in the intersection of a specific element. We can use this API to check the visibility of specific elements in our applications without having to create messy codes and work-around functionalities.

```javascript
let observer = new IntersectionObserver(callback, options);
```

`callback` function is called when our target element intersects our device viewport or a specific element. 
`options` is a object that responsible for controlling the circumstances of how your callback is invoked and has the following fields:
    - `root` such as viewport 
    - `rootMargin` = margin around `root` element
    - `thresold` = number or an array of numbers that indicates what percentage of the target's visibility the observer's callback function should invoke

```javascript
const options = {
    root: document.querySelector('.container'),
    rootMargin: '10px',
    threshold: 0.5
};
const myFirstObserver = new IntersectionObserver((elements) => {
    elements.forEach((element) => console.log('element', element));
}, options);
```

แล้วสร้าง target element สมมุติว่าจะ target ที่ชื่อ header
```javascript
const target = document.querySelector('.header');
```

แล้วใช้ `observe` method เพื่อ observe การเปลี่ยนแปลงใน intersection ของ target element
```javascript
observer.observe(target);
```

พึงระลึกไว้ว่า 
- ถ้า target meet a threshold, callback function จะถูกเรียกใช้ และ receive a list of `IntersectionObserverEntry` objects
- ถ้าเราไม่ตั้ง target element, default ของมันจะเป็น viewport หรือ `null`
- the target element should be within the DOM tree of the root element
- The `IntersectionObserver` interface do not allow you to observe more than one element at a time. To observe multiple, you will have to iterate and observe them one by one.

ที่เหลือมีตัวอย่างการใช้ intersectionObserver API ใน react