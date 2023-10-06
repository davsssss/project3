from flask import Flask, render_template, jsonify
import sqlite3

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/introduction")
def introduction():
    return render_template("introduction.html")

@app.route("/youtube_db")
def youtube_db():
    conn = sqlite3.connect('SQL/clean_data/youtube_db.sqlite')
    conn.row_factory = sqlite3.Row
    print("Opened the database successfully within the route")
    cur = conn.cursor()

    sql = ("""SELECT * FROM pfc_data LIMIT 100""")
    print(sql)
    cur.execute(sql)
    results = cur.fetchall()
    return render_template("youtube_db.html", pfc_data=results)

@app.route("/simple_db")
def simple_db():
    conn = sqlite3.connect('SQL/clean_data/youtube_db.sqlite')
    conn.row_factory = sqlite3.Row
    print("Opened the database successfully within the route")
    cur = conn.cursor()

    sql2 = ("""SELECT Rank_num, Youtuber, Subscribers, Video_views, Category, Country, Channel_type, Created_year, Created_month, Created_date, Latitude, Longitude  FROM pfc_data LIMIT 100""")
    print(sql2)
    cur.execute(sql2)
    results2 = cur.fetchall()
    return render_template("simple_db.html", pfc_data=results2)

@app.route("/json_youtube")
def get_youtube_data():
    conn = sqlite3.connect('SQL/clean_data/youtube_db.sqlite')
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    sql = ("""SELECT * FROM pfc_data""")
    cur.execute(sql)
    results = cur.fetchall()

    # Convert the results to a list of dictionaries
    data = [dict(row) for row in results]

    return jsonify(data)


@app.route("/alex")
def alex():
    return render_template("alex.html")

@app.route("/will")
def will():
    return render_template("youtubersubs.html")

if __name__ == "__main__":
    app.run(debug=True)