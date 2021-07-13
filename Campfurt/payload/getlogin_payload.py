import marshmallow as m

class Logincamp(m.Schema):
    username = m.fields.Str(required=True)
    email = m.fields.Email(required=True)
    password = m.fields.Str(required=True)

    class Meta:
        unknown = m.EXCLUDE