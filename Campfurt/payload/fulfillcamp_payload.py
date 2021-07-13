import marshmallow as m


class fulfillcamp(m.Schema):
    id = m.fields.Int()

    class Meta:
        unknown = m.EXCLUDE
