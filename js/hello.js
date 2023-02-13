// hello from node.js




// micro task queue can only have 

// 1) all the promise call backs and mutation observar callbacks(this thing checks on changes in dom tree)

// microTassk queue has more priotity than call back queue

// if microTassk creates more microTassk of it self the callback queue task will never execute this senario is called as starvation