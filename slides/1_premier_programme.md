class: center, middle

# Qu'est-ce qu'un programme?

Des idées?

---

# Comment est-ce qu'on programme?

--

**On créer un fichier**

--

**On y écrit du code**

--

Par code on veut dire du texte.

Comme dans un fichier word.

Ce texte doit respecter certaines règles.

C'est ce qu'on appelle un language de programmation.

--

**On fait en sorte que ce code se fasse comprendre par l'ordinateur**

--

ça implique que notre code, doit se faire mouliner pour être compris par l'ordinateur

On appelle cela de la compilation ou de l'interpretation

---

# A quoi ça ressemble du code?

```asm
; ----------------------------------------------------------------------------------------
; Writes "Hello, World" to the console using only system calls.
; To assemble and run:
;
;     nasm -felf64 hello.asm && ld hello.o && ./a.out
; ----------------------------------------------------------------------------------------

          global    _start

          section   .text
_start:   mov       rax, 1                  ; system call for write
          mov       rdi, 1                  ; file handle 1 is stdout
          mov       rsi, message            ; address of string to output
          mov       rdx, 13                 ; number of bytes
          syscall                           ; invoke operating system to do the write
          mov       rax, 60                 ; system call for exit
          xor       rdi, rdi                ; exit code 0
          syscall                           ; invoke operating system to exit

          section   .data
message:  db        "Hello, World", 10      ; note the newline at the end
```

Ceci est du code assembleur.

C'est un des premiers language de programmation (1949).

---

# Non mais vraiment

```python
print("Hello world")
```

Le programme fait la même chose que sur la slide précédente...

--

ça c'est du python, un autre language de programmation.

Un peu plus moderne quand même (1991).


---

# On va commencer

Nos outils pour aujourd'hui:
- Visual studio
- Python
- Google

---

# Visual Studio Code: Editeur de code

???

Open source https://github.com/microsoft/vscode

---

# Python: notre premier language de programmation

.center[
[img './python.svg']
]

- Simple
- En Anglais

---

# Python: notre premier language de programmation

.center[
[img './python_2.jpg']
]

Python est un language simple qui utilise des mots (en anglais) pour programmer.

Il a été créer en 

Programmer c'est "simplement" donner des instructions à l'ordinateur.

L'ordinateur fait ce qu'on lui demande et c'est tout.

---

# Google

Bon pas trop besoin de présentation...

Vous avez le droit d'utiliser google, c'est normal.

???

Tant que vous trainez pas sur insta ou facebook trop aujourd'hui, je serais content

---

# Un peu de vocabulaire

Vocabulaire:
- Ouvrir
- Run
- Debug

---

# Bon on veut voir à quoi ça ressemble

```python
import random

n = -1
min = 0
max = 10000
reponse = random.randrange(min,max)

while n is not reponse:
    entree = input(f"Entrez un nombre entre <{min},{max}>")
    n = int(entree)
    if n < reponse:
        print(f"Le nombre est trop petit")
    elif n > reponse:
        print(f"Le nombre est trop grand")
    else:
        print("Hmmmmmm")
```

--

On va disséquer ça un peu

---

# 1. Une variable

Une variable permet de stocker de l'information.

On stocke généralement un nombre, du texte, autres?

```python
unNombre = 10
unText = "Du Texte"
```

--

On parle plutôt en info de `string` et de `integers` (`int` en plus cours)

---
# 1. Une variable

```python
import random

*n = -1
*min = 0
*max = 10000
*reponse = random.randrange(min,max)

while n is not reponse:
    *entree = input(f"Entrez un nombre entre <{min},{max}>")*
    n = int(entree)
    if n < reponse:
        print(f"Le nombre est trop petit")
    elif n > reponse:
        print(f"Le nombre est trop grand")
    else:
        print("Hmmmmmm")
```

---

# 2. Entrée / Sorties

Une entrée permet d'intéragir avec le programme.

ça permet de prendre de l'information et de l'injecter dans le programme

--

Une sortie permet de montrer des choses

ça nous permet de faire un retour sur ce qui se passe

---

# 2. Entrée / Sorties

```python
import random

n = -1
min = 0
max = 10000
reponse = random.randrange(min,max)

while n is not reponse:
*    entree = input(f"Entrez un nombre entre <{min},{max}>")
    n = int(entree)
    if n < reponse:
*        print(f"Le nombre est trop petit")
    elif n > reponse:
*        print(f"Le nombre est trop grand")
    else:
*        print("Hmmmmmm")
```

---

# 2. Entrée / Sorties

Dès qu'on utilise `input` on a moyen de récupérer ce qu'on tape au clavier.

```python
entree = input(f"Entrez un nombre entre <{min},{max}>")
```

--

On aura donc dans la variable `entree`, la *valeur* que l'on a écrit

Cette entrée est automatiquement une `string`.
Cela veut dire que l'on ne peut faire des tests

---

# 2. Entrée / Sorties

Dès qu'on utilise `print` on écrit des choses à l'écran.

```python
print(f"Entrez un nombre entre <{min},{max}>")
```

--

Notons le petit *f* au début de print.

Cela permet de *formatter* la string.

Formatté nous permet d'ajouter des variables dans la string.

---

# 3. IF ELIF ELSE

**if** permet de mettre une *condition* sur quelque chose.

Une condition est un endroit où on teste une variable, par exemple.

```python
n = 4
if n < 5:
    print("Trop null")
```

???

**notons** l'usage du *:*.

---

# 3. IF ELIF ELSE

On peut crée plusieurs conditions à la suite avec **elif**

```python
n = 15
if n < 5:
    print("Trop null")
elif n > 10:
    print("Bon ca le fait")
```

---

# 3. IF ELIF ELSE

Et plus généralement on a le **else**

```python
n = 6
if n < 5:
    print("Trop null")
elif n > 10:
    print("Bon ca le fait")
else:
    print("Chouettee")
```

---

# 4. While

*while* est ce qu'on appelle un boucle.

--

Une boucle permet de répeter quelque chose "tant qu'une condition"

Cette condition peut être n'importe quoi

```python
n = 0
while n < 10:
    print(f"Le nombre est {n}")
    n = n + 1
```

---

# 4.1 While

Il existe en python deux variable qui sont `True` et `False`.

Qui veulent respectivement dire `vrai` ou `faux`.

Ceci est utile quand on veux faire tourner un programme à l'infini, par example

```python
while True:
    print("Bon c'est long la")
```

---

# 5. For

*for* est aussi une boucle.

*for* nous permet de faire la même chose que dans while.

Sauf que *for* utilise un système de conteur

--

```python
for n in range(10):
    print(f"Le nombre est {n}")
```

--

*for* fait ce que l'on appelle de l'itération.

---

# 5.1 For vs While

.left-column[
```python
n = 0
while n < 10:
    print(f"Le nombre est {n}")
    n = n + 1
```
]

.right-column[
```python
for n in range(10):
    print(f"Le nombre est {n}")
```
]

---

# 5.2 range

Bon on viens de voir while, mais c'est quoi ce `range` truc?

Et bien range fait ce que l'on appelle une liste de nombre.

En réalité `range(10)` créer une suite de nombre de **0** jusqu'à **10**.

donc `range(10)` est la même chose que dire 0,1,2,3,4,5,6,7,8,9,10.

# 6. Listes

Pour expliquer range, on viens de voir la notions de `liste`.

On a tous déjà fait nos courses au moins une fois.

Et on a tous eu une liste de devoir.

Et bien là c'est la même chose.

Une liste en python s'écrit comme ceci

```python
maListDeChose = ["premier", "deuxieme"]
encorePlus = [0,2,1,5,74]
```

# 6.1 Listes

Les listes sont utiles parce qu'on boucler dessus avec for

```python
maListDeChoseAFaire = ["preparer la presentation", "les croissants", "dormir"]

print("Je dois faire :")
for chose in maListDeChoseAFaire:
    print(f"{chose}")

```

# 7. Une fonction

Une fonction nous permet de raccourcir du code.

ça permet de centralisé de la logique à un seul endroit.

```python
def ditBonjour(nom):
    print(f"Bonjour {nom}")

```

# 7.1 Une fonction

Mais ça nous sert à rien juste une fonction comme ça

Alors il faut "l'utiliser".

```python
def ditBonjour(nom):
    print(f"Bonjour {nom}")

ditBonjour("Thomas")

```

# 7.2 Une fonction

Une fonction doit toujours être défini avant d'être utilisé

```python
ditBonjour("Thomas")

def ditBonjour(nom):
    print(f"Bonjour {nom}")
```

--

Ce programme ne fonctionne pas... et ouais

---
