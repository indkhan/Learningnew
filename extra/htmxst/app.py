from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory task storage (for simplicity, use a database in production)
tasks = []


@app.route("/")
def index():
    return render_template("index.html", tasks=tasks)


@app.route("/add-task", methods=["POST"])
def add_task():
    task = request.form["task"]
    if task:
        tasks.append({"id": len(tasks) + 1, "name": task, "completed": False})
    return render_template("task_list.html", tasks=tasks)


@app.route("/delete-task/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task["id"] != task_id]
    return render_template("task_list.html", tasks=tasks)


@app.route("/complete-task/<int:task_id>", methods=["POST"])
def complete_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = True
            break
    return render_template("task_list.html", tasks=tasks)


if __name__ == "__main__":
    app.run(debug=True)
