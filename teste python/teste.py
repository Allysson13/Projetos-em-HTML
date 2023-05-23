def cifrar_palavra(palavra):
    vogais = ['a', 'e', 'i', 'o', 'u']
    consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']
    cifra = ''

    for letra in palavra:
        if letra in consoantes:
            consoante_original = letra
            index_consoante = consoantes.index(consoante_original)
            vogal_proxima = vogais[min(index_consoante, len(vogais)-1)]
            consoante_seguinte = consoantes[min(index_consoante + 1, len(consoantes)-1)]
            cifra += consoante_original + vogal_proxima + consoante_seguinte
        else:
            cifra += letra

    return cifra

# Exemplo de uso:
palavra = input("Digite uma palavra: ")
cifra = cifrar_palavra(palavra)
print("Cifra: ", cifra)
