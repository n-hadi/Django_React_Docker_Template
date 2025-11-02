FROM python:3.12

WORKDIR /app

RUN pip install uv

COPY pyproject.toml uv.lock ./

RUN uv pip install --system .

COPY . .

EXPOSE 8000

CMD ["uv", "run", "uvicorn", "config.asgi:application", "--host", "0.0.0.0", "--port", "8000", "--reload"]
