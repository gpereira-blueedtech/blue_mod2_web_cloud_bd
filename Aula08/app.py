from flask import Flask, render_template, request, redirect

app = Flask(__name__)
itens = []

@app.route('/')
def index():
    nomelista = "LISTA DE AFAZERES"

    return render_template(
        'index.html', 
        nomelista = nomelista, 
        itens=itens
        )
   
# @app.route('/pagina2')
# def pagina2():
#     return '<h1>Esse é a página 2!!</h1>'

@app.route('/nova', methods=['POST','GET'])
def nova():

    if request.method == 'POST':
        item = request.form['item']
        itens.append(item)
        return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)