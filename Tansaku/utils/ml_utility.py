import torch
from transformers import CLIPProcessor, CLIPModel, CLIPTokenizer


def get_model_info(model_ID, device):
    # Save the model to device
    model = CLIPModel.from_pretrained(model_ID).to(device)

    # Get the processor
    processor = CLIPProcessor.from_pretrained(model_ID)

    # Get the tokenizer
    tokenizer = CLIPTokenizer.from_pretrained(model_ID)

    # Return model, processor & tokenizer
    return model, processor, tokenizer


def set_device():
    # Set the device
    device = "cuda" if torch.cuda.is_available() else "cpu"

    model_ID = "openai/clip-vit-base-patch32"

    model, processor, tokenizer = get_model_info(model_ID, device)
