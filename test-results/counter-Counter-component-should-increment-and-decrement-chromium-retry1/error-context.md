# Page snapshot

```yaml
- generic [ref=e3]:
  - heading "Counter Component" [level=2] [ref=e4]
  - generic [ref=e5]:
    - heading "Counter" [level=1] [ref=e6]
    - paragraph [ref=e7]: "Count: 0"
    - button "Increase" [ref=e8] [cursor=pointer]
    - button "Decrease" [active] [ref=e9] [cursor=pointer]
  - heading "TodoList Component" [level=2] [ref=e10]
  - generic [ref=e11]:
    - heading "Todo List" [level=1] [ref=e12]
    - textbox "Add a new task" [ref=e13]
    - button "Add Task" [ref=e14] [cursor=pointer]
    - list
  - heading "User Profile Component" [level=2] [ref=e15]
  - generic [ref=e16]:
    - heading "User Profile" [level=1] [ref=e17]
    - generic [ref=e18]:
      - generic [ref=e19]:
        - text: "Name:"
        - textbox "Name:" [ref=e20]: John Doe
      - generic [ref=e21]:
        - text: "Email:"
        - textbox "Email:" [ref=e22]: john.doe@example.com
      - generic [ref=e23]:
        - text: "Bio:"
        - textbox "Bio:" [ref=e24]: Software developer and tech enthusiast.
    - heading "Preview" [level=2] [ref=e25]
    - paragraph [ref=e26]:
      - strong [ref=e27]: "Name:"
      - text: John Doe
    - paragraph [ref=e28]:
      - strong [ref=e29]: "Email:"
      - text: john.doe@example.com
    - paragraph [ref=e30]:
      - strong [ref=e31]: "Bio:"
      - text: Software developer and tech enthusiast.
```