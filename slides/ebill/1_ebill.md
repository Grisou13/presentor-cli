# Tout commença quand

Une entreprise Tartenpion SàRL se rend compte que c'est plus possible de gérer ces factures à la main.

--

Tartenpion cherche, sur internet, les meilleures solutions de facturations et trouve Crésus Facturation!

--

Mlle Allison, la comptable/secrétaire/administratrice de Tartenpion, décide de prendre un essai (youpi)

--

Mlle Allison voit que l'on peut même émettre des eBill.

ça tombe bien elle utilise beaucoup eBill dans sa vie privée.

--

Néanmoins, elle ne comprend pas bien qu'est-ce qu'elle doit faire, elle est perdue avec tous ces termes techniques...

---

# Développons ce que c'est eBill

- Produit de SIX

- Numérise la facturation et la rend 100% en ligne

- ~2 million d'utilisateurs en suisse

- Gratuit (enfin pas pour tous le monde)

- Fonctionne avec la plupart des banques suisse à l'heure actuelle

???

The company name SIX is an abbreviation and stands for Swiss Infrastructure and Exchange

---


# Techniquement comment ça se passe?

<image src="/images/ebill_1.svg" width="100%" height="100%" />

---

# Bon c'est pas aussi simple

<image src="/images/ebill_2.svg" width="100%" height="100%" />

- Pourquoi un système de partenaire?
    - Crée un lien de confiance pour eBill
    - Permets à des entreprises tierses d'interagir directement avec e Bill

---

# Et chez Epsitec et bien...

<image src="/images/ebill_3.svg" width="100%" height="100%" />

--

Mais qu'est-ce qui va pas avec ça?

--

- On a un intermédiaire et on en dépend
- Nous ne savons pas ce qui se passe chez eBill
- Impossible d'automatiser les choses pour les personnes qui utilisent CF
- Nécessite que CF sache faire des "YellowBill" en plus du reste

---

# Qu'est que ça implique pour Tartenpion SàRL du coup

- L'entreprise doit être partenaire YellowBill ( postfinance )
- L'intégration à CF est un peu... "spéciale"


---

# Comment faire mieux?

<image src="/images/ebill_4.svg" />

--

- Enlever les intérmediaires

- Ne pas utiliser le format yellowBill et avoir notre propre interface programmable

- Devenir partenaire eBill!

---

# Mais pourquoi faire ça?

- Peu de nos clients n'utilisent pas encore eBill car c'est un processus complexe
- L'intégration à CF sera facilité
- Plus facile de se maintenir à jour
- On peut s'adapter à n'importe quelle format pour envoyer des eBill

- Nous permet d'avoir une offre simplifier (on fait ça pour nos clients après tous)

- Coûte moins par eBill

---

# Mais pourquoi faire ça? - Prix

#### Prix PostFinance 

| Nbr d'e-bills / month     | Prix par unité    |
|---------------------------|-------------------| 
| Jusqu'à 1,000             | CHF 0.40          |
| Jusqu'à 5,000             | CHF 0.35          |
| Jusqu'à 10,000            | CHF 0.30          |
| Plus de 10,000            | Sur demande       |

--

#### Prix eBill pour les partenaires

|Nbr d'e-bills / month      | Prix par unité    |
|---------------------------|-------------------| 
| Jusqu'à infini            | CHF 0.18          |

???

_[référence PF](https://www.postfinance.ch/en/business/products/accounts-receivable-solutions/e-bill-invoice-issuer.html)_
_[référence eBill](https://www.ebill.ch/dam/downloads/network-partners/Preisliste_Netzwerkpartner_2022_EN.pdf)_

---

# Du coup le projet NWP

- Devenir partenaire eBill
- Intégré la nouvelle solution à nos outils interne (nautilus) pour tester
- Integré la nouvelle solution à CF

--

# Où est-ce qu'on en est du projet

- On est partenaire réseau!
- Nautilus envoi des eBill directement par le nouveau service
- Intégration avec CF est pas encore à 100% terminé

???

Pourquoi ça prend si long?

- Beaucoup de problème lié aux normes PDF utilisé
- La solution a du être validé par eBill

---

