# Agenda
|  Task   |    Time     |
|   --    |     --      |
|questions|9:00 > 10:30 |
|rest     |10:30 > 10:45|
|prep-ex  |10:45 > 11:30|

# Questions
## Routes
1- `Victoria` how to organize routs. It should be separate component file with all routs, which we need to pass to index.js  or we need to add paths to each component?

2- `Elena` And I don't understand the logic how to make a new page with short description of product by clicking on it.

3- `Victoria` (nested routes <OutLet/>) I also would like to discuss routing, why some routes can be inside others and discuss my issue - my id.product route didn't work, when in was "in" home route( which was logical according to me), when I put it separately - it did start to work. I found it out by luck

```js
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SiteWorking />} >
                   <Route path="/product/:id" element={<ProductDetail/>} />
                </Route>
            </Routes>
        </Router>
    );
}
```

## errors

1- `Elena` Hello. Where should we create function to catch an error. And how to do that.

2- `Denys` What is the best practice to catch possible errors of server: I use "try-catch" construction (I've wrapped all code with API functionality), but is it correct if I just send to console.log error that could be (catch(error){console.log(error)}) Or should I create any handler of that error?

## useEffect
1- `Olga` I have problem with filtering on backend. I made several tries and each time i receive warnings and it doesn't work. Would be great to discuss useEffect Hook and how to use it correctly. When we need to use useEffect Hook and how to do it in correct way. (photos on discord)

> https://www.youtube.com/watch?v=DTlmk6QeOHY

## outer scope
1- `Denys` What is a correct way if I want to realize next functionality: If I open products list, I choose category (so to have the filtered products), I click on image/name of product, and it is new page opens with detailed information about that product, I want to push back button in the browser and return to previous page with previous state as it was before I left it (in my case - with filtered product list). I try to use useLocalStorage hook. It keeps the category name, but it doesn't change when I refresh the page.

2- `Olga` What is better way to make API requests with fetch or axios? It depends from our task or it is just we get answer in JSON straightaway and some syntax differece?