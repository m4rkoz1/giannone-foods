from PIL import Image, ImageChops

def trim(im):
    # The background is assumed to be the color of the top-left pixel
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

try:
    im = Image.open('logo.png')
    im = im.convert('RGB')
    trimmed_im = trim(im)
    trimmed_im.save('logo.png')
    print("Cropped successfully.")
except Exception as e:
    print(f"Error: {e}")
