仓库地址[通义 MAI/Z 形象 --- Tongyi-MAI/Z-Image](https://github.com/Tongyi-MAI/Z-Image)
官网：[Z-Image - Efficient Image Generation with Single-Stream Diffusion](https://tongyi-mai.github.io/Z-Image-blog/)
![](assets/Z-image/file-20251201172715716.png)
它这个模型是一组不是一个
![](assets/Z-image/file-20251201172842799.png)
目前已经可以在comfyUI中使用这个模型了[comfyanonymous/ComfyUI: The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.](https://github.com/comfyanonymous/ComfyUI)

Z-image示例部分[Z Image | ComfyUI_examples](https://comfyanonymous.github.io/ComfyUI_examples/z_image/)
你需要下载文本编码器、主模型和VAE
- 文本编码文件： [qwen_3_4b.safetensors](https://huggingface.co/Comfy-Org/z_image_turbo/blob/main/split_files/text_encoders/qwen_3_4b.safetensors) （放在 ComfyUI/models/text_encoders/里）。
- 扩散模型文件： [z_image_turbo_bf16.safetensors](https://huggingface.co/Comfy-Org/z_image_turbo/blob/main/split_files/diffusion_models/z_image_turbo_bf16.safetensors) （放在 ComfyUI/models/diffusion_models/里）。
- VAE：如果你还没有，可以用 [ae.safetensors](https://huggingface.co/Comfy-Org/z_image_turbo/blob/main/split_files/vae/ae.safetensors) 去 Flux 1 VAE（放在 ComfyUI/models/vae/）
