# 1. Ne pas laissé rentrer les adultes

## Programme de base
```python
age = int(input("Entrez votre age: "))
```
--

## Resultat

```python
age = int(input("Entrez votre age: "))

if age < 18:
  print("Salut l'artiste")
else:
  print("Va voir ailleur si j'y suis pas")

```

---

# 1. Suite de fibonnaci

Faire un programme qui permet de faire la suite de fibonnaci:
0 1 1 2 3 5 8 11 ...

## Programme de base

```python
nterms = int(input("Entrez un nombre: "))
 
print("\n la suite fibonacci est :")
```
--

## Resultat

```python
nterms = int(input("Entrez un nombre: "))
 
n1 = 0
n2 = 1
 
print("\n la suite fibonacci est :")
print(n1, ",", n2, end=", ")
 
for i in range(2, nterms):
  suivant = n1 + n2
  print(suivant, end=", ")
 
  n1 = n2
  n2 = suivant
```

--

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

nombre = 5

fib(nombre)
```

---

