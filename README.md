# Cypress를 써보자.
개츠비에 e2e테스트로 cypresss가이드를 제시하고 있다.

## 웹 페이지 방문 
```js
cy.visit('접속할 웹 페이지의 주소');
```

## element query 
엘레멘트의 내용으로 쿼리하는 방법 
```js
cy.contains('쿼리할 엘레멘트가 가지고 있는 내용');
```

## make an assertion
```js
cy.url().should(chainers, value)
```
음... 들어가는 매개변수에 대해서 잘 이해되지 않는다.🤔
