export class Task {
  static tasks = [];
    constructor(name,importance,date) {
      this.name = name;
      this.importance = importance;
      this.dueDate = date;
      Task.tasks.push(this);
      console.log(Task.tasks)
    }
  
    setName(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    setDate(date) {
        this.dueDate = date;
      }
    
      getDate() {
        return this.dueDate;
      }
  

      setImportance(importance) {
        this.importance = importance;
      }
    
      getImportance() {
        return this.importance;
      }


    getDateFormatted() {
      const day = this.dueDate.split('/')[0]
      const month = this.dueDate.split('/')[1]
      const year = this.dueDate.split('/')[2]
      return `${month}/${day}/${year}`
    }
  }
