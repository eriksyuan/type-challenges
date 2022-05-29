type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js逻辑如下
function MyPick(todo, keys) {
  const obj = {};
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}

//  *1.返回一个对象
//  *2.遍历foreach mapped
// ? https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
//  *3.todo[key] 取值 indexed
// ? https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
//  *4.key在不在todo里面  
//  * keyof lookat
