import os
import base64

def convertir_svgs_a_base64(origen, destino):
    # Verificar que la carpeta de origen existe
    if not os.path.isdir(origen):
        print(f"La carpeta de origen '{origen}' no existe.")
        return

    # Crear carpeta de destino si no existe
    if not os.path.exists(destino):
        print(f"La carpeta de origen '{origen}' no existe.")
        return

    for archivo in os.listdir(origen):
        if archivo.lower().endswith(".svg"):
            ruta_svg = os.path.join(origen, archivo)
            nombre_base = os.path.splitext(archivo)[0]
            ruta_txt = os.path.join(destino, f"{nombre_base}.txt")

            with open(ruta_svg, "rb") as f:
                svg_codificado = base64.b64encode(f.read()).decode("utf-8")

            with open(ruta_txt, "w", encoding="utf-8") as f:
                f.write(svg_codificado)

            print(f"Convertido '{archivo}' a '{ruta_txt}'")

# Rutas relativas (ajusta según tu estructura de carpetas)
carpeta_origen = "./svg"
carpeta_destino = "./base64"
convertir_svgs_a_base64(carpeta_origen, carpeta_destino)
